'use client'

import { Card, CardContent, Typography, Box, Link as MuiLink } from '@mui/material'
import { ShoppingBag } from '@mui/icons-material'
import { AffiliateItem } from '@/data/affiliatePool'

interface AffiliateCardProps {
  item: AffiliateItem
}

export default function AffiliateCard({ item }: AffiliateCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: 2,
        borderColor: 'primary.main',
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 6,
          borderColor: 'primary.dark',
        },
      }}
    >
      {/* "Sponsored" badge */}
      <Box
        sx={{
          position: 'absolute',
          top: -12,
          right: 16,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          px: 2,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          boxShadow: 2,
        }}
      >
        Sponsored
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          pt: 3,
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            mx: 'auto',
          }}
        >
          <ShoppingBag sx={{ fontSize: 32 }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          component="h3"
          fontWeight={600}
          textAlign="center"
          sx={{
            color: 'text.primary',
            minHeight: '3em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {item.title}
        </Typography>

        {/* CTA Link */}
        <MuiLink
          href={item.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          sx={{
            mt: 'auto',
            textAlign: 'center',
            color: 'primary.main',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            py: 1.5,
            px: 2,
            borderRadius: 1,
            border: 2,
            borderColor: 'primary.main',
            transition: 'all 0.2s ease',
            display: 'block',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              textDecoration: 'none',
            },
          }}
        >
          View on Amazon →
        </MuiLink>

        {/* Disclosure */}
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            fontSize: '0.65rem',
            lineHeight: 1.3,
          }}
        >
          As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
        </Typography>
      </CardContent>
    </Card>
  )
}
