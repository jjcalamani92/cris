import { useToggle } from "ahooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import { HeaderEcommerce0, HeaderEducation0, HeaderFood0, ShoppingCarts } from "../components";
import { Main, MainEcommerce } from "../components/main";
import { useSite } from "../hooks";

interface LayoutPagesProyects {
	children?: React.ReactNode;
}
export const LayoutPagesProyects: FC<LayoutPagesProyects> = ({

	children,
}) => {
	// const { data:pages0 } = usePages0ByParent(process.env.API_SITE!)
	// console.log(pages0);
	const { asPath } = useRouter()

	const seo = {
		title: "criscrm",
		description: " page description",
		'image': "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"
	}
	const [state, { toggle, setLeft, setRight }] = useToggle();
	const { data: site } = useSite(asPath);

	return (
		<>
			<Head>
				<title>{`criscrm ${seo ? `| ${seo?.title}` : ''}`}</title>
				<meta name="description" content={seo?.description} key="desc" />
				<meta name="og:title" content={`criscrm ${seo ? `| ${seo?.title}` : null}`} />
				<meta name="og:description" content={seo?.description} />
				<meta name="og:image" content={seo?.image} />
				<link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />
			</Head>
			{
				site?.data.type === 'ecommerce' &&
				<Fragment>
					<HeaderEcommerce0 toggleShoppingCarts={toggle} />
					<ShoppingCarts state={state} toggle={toggle} setLeft={setLeft} />
					<MainEcommerce>
						{children}
					</MainEcommerce>
				</Fragment>
			}
			{
				site?.data.type === 'education' &&
				<Fragment>
					<HeaderEducation0 toggleShoppingCarts={toggle} />
					<ShoppingCarts state={state} toggle={toggle} setLeft={setLeft} />
					<MainEcommerce>
						{children}
					</MainEcommerce>
				</Fragment>
			}
			{
				site?.data.type === 'food' &&
				<Fragment>
					<HeaderFood0 toggleShoppingCarts={toggle} />
					<ShoppingCarts state={state} toggle={toggle} setLeft={setLeft} />
					<MainEcommerce>
						{children}
					</MainEcommerce>
				</Fragment>
			}

		</>
	);
};
