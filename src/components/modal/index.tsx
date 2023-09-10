import { useState, useRef, useImperativeHandle, useCallback, forwardRef } from 'react'

import { Modal } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'

import styles from './style/index.module.less'

interface ModalProps {
  // 是否显示关闭按钮，默认不显示；如有多层需要返回，则在组件内部自定义控制
  showClose?: boolean
}
type ModalRefType = { open: () => void; close: () => void } | undefined

const useModal = (modalProps: ModalProps, Slot) => {
  const { showClose } = modalProps
  const modalRef = useRef<ModalRefType>()
  const FormModal = forwardRef(function FormModal(slotProps, mRef) {
    const [visible, setVisible] = useState(false)
    const open = () => {
      setVisible(true)
    }
    const close = () => {
      setVisible(false)
    }
    useImperativeHandle(mRef, () => ({ open, close }))
    return (
      <Modal
        maskClassName={styles.mask}
        onClose={close}
        visible={visible}
        content={
          <>
            {showClose ? <CloseOutline className={styles.back} onClick={close} /> : null}
            <Slot {...slotProps} close={close} />
          </>
        }
      ></Modal>
    )
  })

  return {
    FormModal: useCallback(props => {
      return <FormModal ref={modalRef} {...props} />
    }, []),
    modalRef
  }
}

export default useModal
