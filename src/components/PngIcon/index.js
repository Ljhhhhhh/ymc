import React from 'react'
// const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.png$/)
// requireAll(req).forEach(item => {
//   console.log(item);
// })


const PngIcon = props => {
  const {icon, width, height, handleClick} = props
  const iconWithPath = req(`./${icon}.png`)
  return (
    <div onClick={handleClick}>
      <img style={{width, height}} src={iconWithPath} alt={icon}/>
    </div>
  )
}


export default PngIcon