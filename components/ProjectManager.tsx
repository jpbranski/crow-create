'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material'
import { Save, FolderOpen, Delete, Share, ContentCopy } from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'

export default function ProjectManager() {
  const { config, saveProject, loadProject, getSavedProjects, deleteProject } = useDesignSystem()
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [loadDialogOpen, setLoadDialogOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [savedProjects, setSavedProjects] = useState<string[]>([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  useEffect(() => {
    setSavedProjects(getSavedProjects())
  }, [saveDialogOpen, loadDialogOpen])

  const handleSave = () => {
    if (projectName.trim()) {
      saveProject(projectName.trim())
      setSnackbarMessage(`Project "${projectName}" saved successfully`)
      setSnackbarOpen(true)
      setSaveDialogOpen(false)
      setProjectName('')
    }
  }

  const handleLoad = (name: string) => {
    loadProject(name)
    setSnackbarMessage(`Project "${name}" loaded successfully`)
    setSnackbarOpen(true)
    setLoadDialogOpen(false)
  }

  const handleDelete = (name: string) => {
    deleteProject(name)
    setSavedProjects(getSavedProjects())
    setSnackbarMessage(`Project "${name}" deleted`)
    setSnackbarOpen(true)
  }

  const handleShare = () => {
    const encoded = btoa(JSON.stringify(config))
    const url = `${window.location.origin}${window.location.pathname}?theme=${encoded}`

    navigator.clipboard.writeText(url).then(() => {
      setSnackbarMessage('Shareable URL copied to clipboard')
      setSnackbarOpen(true)
    })
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant="outlined"
        startIcon={<Save />}
        onClick={() => setSaveDialogOpen(true)}
      >
        Save Project
      </Button>
      <Button
        variant="outlined"
        startIcon={<FolderOpen />}
        onClick={() => setLoadDialogOpen(true)}
      >
        Load Project
      </Button>
      <Button variant="outlined" startIcon={<Share />} onClick={handleShare}>
        Share URL
      </Button>

      {/* Save Dialog */}
      <Dialog open={saveDialogOpen} onClose={() => setSaveDialogOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Save Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            fullWidth
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSave()
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSaveDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" disabled={!projectName.trim()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Load Dialog */}
      <Dialog open={loadDialogOpen} onClose={() => setLoadDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Load Project</DialogTitle>
        <DialogContent>
          {savedProjects.length === 0 ? (
            <Box sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
              No saved projects yet
            </Box>
          ) : (
            <List>
              {savedProjects.map((name) => (
                <ListItem key={name} divider>
                  <ListItemText primary={name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="load"
                      onClick={() => handleLoad(name)}
                      sx={{ mr: 1 }}
                    >
                      <FolderOpen />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(name)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoadDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}
