import style from './page.module.css'

const Home = () => {
	return (
		<main className={style.main}>
			<div className={style.title}>
				<h1>About Us</h1>
				<div className={style.textItem}>
					<h1>
						The cozy interior and exquisite cuisine will make your lunch or
						dinner unforgettable. We are glad to see our guests and always
						strive to pleasantly surprise them. The restaurant menu and wine
						list are thought out to the smallest detail, and our waiters will
						help you choose a dish for every taste and recommend suitable drinks
						when ordering. We use only fresh products and work with trusted
						partners - after all, it is high-quality and fresh ingredients that
						allow us to create real culinary masterpieces. For visitors who
						prefer modern European cuisine, we offer salads, hot dishes and
						appetizers. For gourmets, we have unusual dishes, the preparation
						process of which requires a lot of time and the highest skill.
					</h1>
				</div>
			</div>
		</main>
	)
}

export default Home
