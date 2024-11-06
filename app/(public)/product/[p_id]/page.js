import React from 'react'

const ProductDetailPage = async ({params}) => {
    const paramData=await params
  return (
    <div>{paramData.p_id}</div>
  )
}

export default ProductDetailPage