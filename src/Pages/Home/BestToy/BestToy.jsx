import React from 'react';

const BestToy = () => {
	return (
		<div>
			<div>
				<div>
					<h1 className='text-center text-4xl font-bold text-cyan-600 py-6 mt-6' >Best Toy Shop</h1>
					<p className='text-center font-bold'> Best toy shop in our countery list here, they have awosome toy collection in there store
						<br />
						and every ites ar affortable for every people who love toys
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center py-7 gap-4'>

					<img className='shadow p-6' src="https://img.freepik.com/premium-vector/toys-shop-inside-colored-background-with-board-games-books-children-shelves-giant-dinosaur-pedestal-illustration_1284-65121.jpg?w=1060" data-aos="zoom-in-right" alt="" />
					<img className='shadow p-6' src="https://img.freepik.com/free-vector/online-toys-shop-background_1284-65124.jpg?w=1060&t=st=1684383132~exp=1684383732~hmac=7f835c36ff112cadcfec211654bd26a158d9be56b4099b3205334cb95fccdacb" data-aos="fade-up" alt="" />
					<img className='shadow p-6 mt-5' src="https://img.freepik.com/premium-photo/shop-toy-store-babies-soft-toy-closeup-shopping-trip-with-blurry-background_73683-3602.jpg?w=996" data-aos="fade-down" alt="" />
					<img className='shadow p-6' src="https://img.freepik.com/premium-vector/store-background-design_1284-1611.jpg?w=900" data-aos="zoom-in-left" alt="" />
				</div>
			</div>
		</div>
	);
};

export default BestToy;