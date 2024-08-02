import Link from 'next/link'
import style from './header.module.css'
export default function Header() {
	return (
		<div className={style.colorinfo}>
			<div className={style.colorNav}>
				<div className={style.navigation}>
					<div className={style.logomain}>
						<h1>OUR</h1>
					</div>
					<div className={style.elemNavig}>
						<p>
							<Link href='/'>Home</Link>
						</p>

						<p>
							<Link href='/menu'>Menu</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
