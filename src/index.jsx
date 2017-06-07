import React from 'react'
import style from './style.jsx'

export const DefaultBehavior = () => (
  <div className="class-A">
    <style jsx>{style}</style>
    <div className="class-B">Text</div>
  </div>
)

export const FromCreateElement = () => React.createElement('div', { className: 'class-A' }, (
  <div>
    <style jsx>{style}</style>
    <div className="class-B">Text</div>
  </div>
))

export const ManuallyCreateElement = () => {
  const CustomTag = 'li'
  return (
    <CustomTag className="class-A">
      <style jsx>{style}</style>
      <div className="class-B">Text</div>
    </CustomTag>
  )
}
