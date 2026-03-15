
const ViewButton = ({gridView, setGridView}: {gridView: boolean, setGridView: React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    const toggleProductView = () => {
    setGridView((prev: boolean) => !prev);
  };
  
  return (
    <button onClick={toggleProductView} className="flex items-center gap-2 cursor-pointer bg-primary py-[5px] px-[5px] rounded-xl focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none">
        <span className={`${gridView ? 'bg-white text-primary' : 'bg-transparent text-white'} rounded-[9px] py-1 px-4`}>Grid</span>
        <span className={`${!gridView ? 'bg-white text-primary' : 'bg-transparent text-white'} rounded-[9px] py-1 px-4`}>List</span>
    </button>
  )
}

export default ViewButton;