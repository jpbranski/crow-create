'use client'

import { Card, CardContent, Typography, Button, Box } from '@mui/material'
import { OpenInNew } from '@mui/icons-material'
import { AffiliateItem } from '@/data/affiliatePool'

interface AffiliateCardProps {
  data: AffiliateItem
}

export default function AffiliateCard({ data }: AffiliateCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: 2,
        borderColor: 'divider',
        borderStyle: 'dashed',
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Icon circle */}
        {data.icon && (
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: data.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Icon would go here - for now using initials */}
            <Typography variant="body2" sx={{ color: '#fff', fontWeight: 700 }}>
              {data.label.charAt(0)}
            </Typography>
          </Box>
        )}

        {/* Title */}
        <Typography variant="h6" component="h3" fontWeight={600}>
          {data.label}
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {data.description}
        </Typography>

        {/* CTA Button */}
        <Button
          variant="outlined"
          endIcon={<OpenInNew />}
          href={data.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          fullWidth
          sx={{ mt: 'auto' }}
        >
          Visit {data.label}
        </Button>
      </CardContent>
    </Card>
  )
}
