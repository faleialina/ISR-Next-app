import { iProduct } from '@/interfaces'
// import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import storage from '../../storage/storage'
import style from './menu.module.css'

const Menu: React.FC<{ products: iProduct[] }> = async () => {
	const products = await getProducts()
	return (
		<>
			<div className={style.menuWrap}>
				<div className={style.title}>
					<h1>Our Menu</h1>
					<p>
						We consider all the drivers of change gives you the components you
						need to change to create a truly happens.
					</p>
				</div>
				<div className={style.container}>
					{products?.props.products.map((elem: iProduct, index: any) => (
						<Link
							href={`/menu/${elem.id}`}
							style={{ textDecoration: 'none' }}
							key={index}
						>
							<div className={style.item}>
								<Image className={style.imgItem} src={elem.img} alt='img' />

								<div className={style.containerText}>
									<h1>{elem.price}</h1>
									<h2>{elem.title}</h2>
									<p>{elem.description}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const data = await storage
// 	return {
// 		props: {
// 			products: data,
// 		},
// 		revalidate: 60,
// 	}
// }
export const getProducts = async () => {
	const data = await storage
	return {
		props: {
			products: data,
		},
		revalidate: 60,
	}
}

export default Menu
