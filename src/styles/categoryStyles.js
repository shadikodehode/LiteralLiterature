export const CategoryStyles = {
  categoryContainer: 'gap-8 mt-12 no-drag',
  categoryDiv: 'flex flex-row justify-center gap-20',

  categoryButtonDiv: 'flex justify-end mr-16',
  categoryButton: 'text-sm group cursor-pointer transition-transform duration-75 font-semibold hover:font-bold hover:bg-rose-800 rounded-md px-2 py-1 hover:scale-105 hover:text-gray-100',

  categoryCardDiv: 'relative flex flex-col items-center',
  categoryCardImg: 'h-38 w-23.5 shadow-md rounded-sm no-drag',
  CategoryLabel: 'flex absolute -bottom-2 text-xl w-28 skew-4 justify-center font-bold text-gray-50 bg-rose-800 rounded-sm p-1 shadow-xs shadow-black/30',
  categoryBg: 'flex absolute justify-center -skew-4 -bottom-2 rounded-xl w-34 h-18 bg-olive-100 -z-10 shadow-md shadow-black/30',

  categoryModalDiv: 'flex items-center justify-center backdrop-blur-sm bg-slate-600/50',
  categoryModalClose: 'flex flex-col pointer-events-auto m-20 rounded-2xl w-3/4',
  categoryModalButton: 'absolute flex top-0 right-0 m-8',
  categoryModalCard: 'flex flex-row flex-wrap justify-center p-8 gap-20',
}