import React from 'react'


const ProductDetails = ({name, desc, price, review, btn_label, img_url}) => {
    return (
    <div className="min-w-screen bg-gray-200 flex items-start p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                        <img src={img_url} className="w-full relative z-10" alt="" />
                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                    <div className="mb-10">
                        <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                        <p className="text-sm" dangerouslySetInnerHTML={{__html: desc}}></p>
                    </div>
                    <div>
                        <div>
                            <p>Customer review: {review}⭐</p>
                        </div>
                        <div className="align-bottom my-5">
                            <span className="text-xl leading-none align-baseline">from $</span>
                            <span className="font-bold text-5xl leading-none align-baseline">{price}</span>
                            <span className="text-xl leading-none align-baseline">.99 / day</span>
                        </div>
                        <div className="align-bottom">
                            <button className="bg-yellow-500 opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>{btn_label}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails