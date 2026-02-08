import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps,
} from '@mui/material'

interface ModalProps extends Omit<DialogProps, 'open'> {
  open: boolean
  title?: string
  onClose: () => void
  actions?: React.ReactNode
  children: React.ReactNode
}

export function Modal({ open, title, onClose, actions, children, ...props }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  )
}
