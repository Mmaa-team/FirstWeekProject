import { Select, Option } from '@material-tailwind/react'

function Allproducts() {
    return (
        <div className="allproducts w-full px-6">
            <div className="container">

                <div className="nav flex items-center justify-between">
                    <p>15654 Items</p>

                    <select className="w-40 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-black outline-none transition-all focus:outline-none">
                        <option
                            value=""
                            disabled
                            selected
                            hidden
                            className="bg-[#d3a48974] text-black"
                        >
                            Sort By
                        </option>
                        <option className="bg-[#d3a48974] py-2" value="option1">
                            Option 1
                        </option>
                        <option className="bg-[#d3a48974] py-2" value="option2">
                            Option 2
                        </option>
                        <option className="bg-[#d3a48974] py-2" value="option3">
                            Option 3
                        </option>
                        <option className="bg-[#d3a48974] py-2" value="option4">
                            Option 4
                        </option>
                    </select>

                    {/* <Select
                            label="Sort By "
                            className="text-white placeholder:text-white"
                        >
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select> */}
                </div>

                <div className='grid '>

                </div>
            </div>
        </div>
    )
}

export default Allproducts
