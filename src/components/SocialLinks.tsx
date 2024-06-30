import Link from 'next/link';
import {
	FaDiscord,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaSquareXTwitter,
} from 'react-icons/fa6';

export const SocialLinks = () => {
	return (
		<ul className="flex gap-2 text-xl">
			<li>
				<Link href="/facebook" target="_blank">
					<FaFacebook />
				</Link>
			</li>
			<li>
				<Link href="/linkedin" target="_blank">
					<FaLinkedin />
				</Link>
			</li>
			<li>
				<Link href="/x" target="_blank">
					<FaSquareXTwitter />
				</Link>
			</li>
			<li>
				<Link href="/discord" target="_blank">
					<FaDiscord />
				</Link>
			</li>
			<li>
				<Link href="/github" target="_blank">
					<FaGithub />
				</Link>
			</li>
		</ul>
	);
};