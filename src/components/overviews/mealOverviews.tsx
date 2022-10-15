import { useRouter } from 'next/router'
import React from 'react'
import { MealFood } from '..'
import { useFood, useProduct } from '../../hooks'

export const MealOverviews = () => {
  const { asPath } = useRouter()
  const { data: meal } = useFood(asPath)
  // console.log(meal);
  
  switch (meal?.type) {
    case "food": return <MealFood meal={meal} />;
    // case "clothing": return <ProductWear product={product} />;
    // case "backpack": return <ProductWear product={product} />;
    // case "handbag": return <ProductWear product={product} />;
    // case "hardware-store": return <ProductWear product={product} />;
    // case "glasses": return <ProductWear product={product} />;
    // case "furniture": return <ProductWear product={product} />;
    default:
      return null
  }
  
}
