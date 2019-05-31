import React, {useState, useCallback} from 'react'
import {Btn} from './style'

const InviteBtn = props => {
  const { handleClick } = props
  const defaultContent = props.content || '发送验证码'
  const defaultRestTime = props.restTime || 60
  const [restTime, setRestTime] = useState(0)

  const doClick = useCallback(() => {
      handleClick()
      let rt = defaultRestTime
      setRestTime(rt - 1)
      const timer = setInterval(() => {
        if (--rt === 0) {
          setRestTime(rt)
          clearTimeout(timer)
        } else {
          setRestTime(rt)
        }
      }, 1000)
  }, [handleClick, defaultRestTime])

  return (
    restTime ? <Btn className="disabled">{restTime}</Btn> : <Btn onClick={doClick}>{defaultContent}</Btn>
  )
}

export default InviteBtn