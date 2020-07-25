<template>
	<div>
		<div class="intro">
			<div class="container">
				<header class="intro__header">
					<div class="contact">
						<div class="contact__logo">
							Страховой
							<br />агент
						</div>
						<div class="contact__info">
							Оформление полисов страхования
							<br />
							<p>
								<span class="main_color">8(999)</span>217-73-44
							</p>
						</div>
					</div>
					<nav class="nav">
						<a v-for="(link, i) in arrayLink" :key="i" :href="link.href">{{link.name}}</a>
					</nav>
				</header>

				<div class="intro__main">
					<div class="container">
						<strong>Оформление полисов</strong>
						<span class="main_color">
							ОСАГО,КАСКО,
							ЗЕЛЕНОЙ КАРТЫ, ВЫЕЗЖАЮЩИХ ЗА РУБЕЖ
							ИПОТЕЧНОЕ СТРАХОВАНИЕ
							И ДРУГИЕ ВИДЫ
						</span>
						<div class="button" @click="reqCall">Заказать звонок</div>
					</div>
				</div>
			</div>
		</div>

		<div class="calculation">
			<div class="container">
				<h1>
					<span class="main_color">Онлайн расчет</span> стоимости полиса ОСАГО
				</h1>
				<div class="calculation__form_and_check">
					<div class="form-container">
						<div class="form">
							<div class="form__left">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
							</div>
							<div class="form__right">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
							</div>
						</div>

						<div class="button" @click="calculation">Заказать звонок</div>
					</div>

					<div class="check">
						<p>sdd</p>
						<p>hjj</p>
						<p>jghjghj</p>
						<p>jgjhgj</p>
						<p>jghjj</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			arrayLink: [
				{
					href: '#',
					name: 'Menu 1',
				},
				{
					href: '#',
					name: 'Menu 2',
				},
				{
					href: '#',
					name: 'Menu 3',
				},
				{
					href: '#',
					name: 'Menu 4',
				},
				{
					href: '#',
					name: 'Menu 5',
				},
			],
		};
	},
	methods: {
		reqCall() {},
	},
	calculation() {},
};
</script>

<style lang="scss" scoped>
</style>
