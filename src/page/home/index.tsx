import { useNavigate } from 'react-router-dom'

import { Button } from 'antd-mobile'

import kkbimg from '@/asset/images/5kb_img.jpeg'
import useModal from '@/components/modal'
import Student from '@/page/student'

import styles from './style/index.module.less'

function Home(): JSX.Element {
  const { modalRef, FormModal } = useModal({}, Student)
  const navigate = useNavigate()
  const gotoPage = () => {
    navigate('student')
  }
  const gotoModal = () => {
    modalRef.current?.open()
  }
  return (
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <div className={styles.img}></div>
        <img src={kkbimg} />
        <div>
          <Button color='primary' onClick={gotoPage} style={{ marginRight: 20 }}>
            学生页面路由跳转
          </Button>
          <Button color='primary' onClick={gotoModal}>
            学生页面打开弹框
          </Button>
        </div>
        <div>
          <Button color='primary'>登录</Button>
          <Button color='primary'>注销</Button>
          登录状态
        </div>
        <p>
          <a
            className='app-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles['app-link']}
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
        <FormModal />
      </header>
    </div>
  )
}

export default Home
