import React from 'react'
import Wrapper from '@/components/Wrapper';
import { IoMdHeartEmpty} from 'react-icons/io';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProduct';
import { fetchDataFromApi } from '@/utils/api';


const ProductDetails = ({product , products}) => {
    const p = product?.data?.[0]?.attributes;


    return (
        <div className="w-full md:py-20">
            <Wrapper>

                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images = {p.image.data} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            JORDAN RETRO 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                                MRP : ₹ 19 695.00
                            <p className="mr-2 text-lg font-semibold">
                            </p>

                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 10
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 10.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 11
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 11.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 12
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 12.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 13
                                </div>
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}

                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>

                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75" >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere ipsum ipsam, nostrum dolor eos laudantium minus incidunt, illum doloremque a eligendi veritatis harum sed asperiores unde, excepturi tempora. Molestias quaerat nobis veritatis sed maxime hic ex quae dolorem ipsam deleniti esse necessitatibus, sequi alias neque blanditiis quidem laudantium adipisci!
                            </div>
                            <div className="markdown text-md mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere ipsum ipsam, nostrum dolor eos laudantium minus incidunt, illum doloremque a eligendi veritatis harum sed asperiores unde, excepturi tempora. Molestias quaerat nobis veritatis sed maxime hic ex quae dolorem ipsam deleniti esse necessitatibus, sequi alias neque blanditiis quidem laudantium adipisci!
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                {/* <RelatedProducts /> */}

            </Wrapper>
        </div>
    );
};

export default ProductDetails;

// Generates Paths
export async function getStaticPaths() {
    //Here we generate all the path of the categories;
    const products = await fetchDataFromApi('/api/products?populate=*')

    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));
    return {
        paths,
        fallback:false
    }
  }

  // `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`);
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);

    return {
        props: {
            product,
            products,
        },
    };
}