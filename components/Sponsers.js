import Link from 'next/link';
import React from 'react';

function Sponsers() {
	return (
		<section className="flex items-center justify-between mt-16 w-[1340px]">
			<div className="flex justify-between ">
				<div>
					<img
						src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
						alt=""
					/>
				</div>
				<div className="pt-11  pl-11">
					<div className="border-r border-gray-400 text-[#002F34] ">
						<h1 className="text-4xl font-bold pr-28">TRY THE OLX APP</h1>
						<p className="pt-8 text-xl">
							Buy, sell and find just about anything using <br />the app on your mobile.
						</p>
					</div>
				</div>
			</div>

			<div className="">
				<h1 className="text-[#002F34] font-bold">GET YOUR APP TODAY</h1>
				<div className="flex pt-2 pr-6">
					<img
						className="h-14 w-32"
						src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
						alt=""
					/>
					<img
						className="h-14 w-32"
						src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
						alt=""
					/>
					<Link href="https://appgallery.huawei.com/Featured">
						<a>
							<img
								className="h-14 w-32"
								src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
								alt=""
							/>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Sponsers;
