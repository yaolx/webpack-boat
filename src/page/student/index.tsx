import { useState } from 'react'

import { Button } from 'antd'
import { map } from 'lodash-es'

import styles from './style/index.module.less'
function Student(): JSX.Element {
  const [list, setList] = useState([])
  // 新增学生
  const onAdd = () => {}
  // 删除学生
  const onDelete = () => {}

  return (
    <div className={styles.student}>
      <div>
        <Button type='primary' onClick={onAdd}>
          新增
        </Button>
      </div>
      {map(list, item => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.name}>{item.name}</div>
            <Button type='primary' className={styles.btn} onClick={() => onDelete()}>
              删除
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default Student
