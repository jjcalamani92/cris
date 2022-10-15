import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { HeaderPage } from "../components";
import { Main } from "../components/main";

interface Layout {

	children?: React.ReactNode;
}

export const LayoutPages: FC<Layout> = ({

	children,
}) => {
	// const { data:pages0 } = usePages0ByParent(process.env.API_SITE!)
	// console.log(pages0);
	const { query, asPath } = useRouter()

	const seo = {
    title: "criscrm",
    description:" page description",
		'image': "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"
  }

	return (
		<>
			<Head>
				<title>{`criscrm ${seo ? `| ${seo?.title}`: ''}`}</title>
				<meta name="description" content={seo?.description} key="desc" />
				<meta name="og:title" content={`criscrm ${seo ? `| ${seo?.title}`: null}`} />
				<meta name="og:description" content={seo?.description} />
				<meta name="og:image" content={seo?.image} />
				<link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />


			</Head>
			<HeaderPage />
			<Main>
				{children}
			</Main>
			
		</>
	);
};
