'use client'

import { categories } from '@/lib/data'
import { useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const CategorySelect = () => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedCategory = searchParams.get('category') || 'all'

  const handleChange = (value: string) => {
    if (value === 'all') {
      router.push('/dummyjson-products')
    } else {
      router.push(`/dummyjson-products?category=${value}`)
    }
  }

  return (
    <Select value={selectedCategory} onValueChange={handleChange}>
      <SelectTrigger className="w-[220px] cursor-pointer">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>

        {categories.map(category => (
          <SelectItem
            key={category.id}
            value={category.slug}
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategorySelect