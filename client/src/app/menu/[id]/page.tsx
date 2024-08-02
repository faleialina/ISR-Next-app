import { iProduct } from '@/interfaces'
// import { GetStaticProps } from 'next'
import Image from 'next/image'
import storage from '../../../storage/storage'
import style from './id.module.css'

const Id: React.FC<{ products: iProduct[] }> = async ({ products }) => {
// const Id: React.FC<{ products: iProduct[] }> = async ({ params }:any) => {
	// const products = await getProducts(params)
	return (
		<>
			<div className={style.wrapperColor}>
				<div className={style.wrapperItem}>
					<Image
						className={style.imgItem}
						src={products[0]?.img}
						// src={products?.props.products[0]?.img}
						alt='img'
					/>

					<div className={style.textItem}>
						<h1>{products[0]?.title}</h1>
						<h2>{products[0]?.description}</h2>
						<p>Total:{products[0]?.price}</p>
					</div>
				</div>
			</div>
		</>
	)
}

// export async function getStaticPaths() {
// 	const data: iProduct[] = await storage
// 	const pathsWithParams = data.map((elem: iProduct) => ({
// 		params: { id: elem.id.toString() },
// 	}))

// 	return {
// 		paths: pathsWithParams,
// 		fallback: 'blocking',
// 	}
// }
export async function generateStaticParams() {
	const data: iProduct[] = await storage
	const pathsWithParams = data.map((elem: iProduct) => ({
		params: { id: elem.id.toString() },
	}))

	return {
		paths: pathsWithParams,
		fallback: 'blocking',
	}
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	if (params && params.id) {
// 		const id = params.id!
// 		const data: iProduct[] = await storage.filter(
// 			(elem: iProduct) => elem.id == +id
// 		)
// 		return {
// 			props: {
// 				products: data,
// 			},
// 			revalidate: 60,
// 		}
// 	}
// 	return {
// 		props: { error: true },
// 	}
// }
export const getProducts = async ({params}: any) => {
	if (params && params.id) {
		const id = params.id!
		const data: iProduct[] = await storage.filter(
			(elem: iProduct) => elem.id == +id
		)
		return {
			props: {
				products: data,
			},
			revalidate: 60,
		}
	}
}

export default Id
