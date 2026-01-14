import { motion, type Variants } from 'motion/react';
import Image from 'next/image';

const morphingBlob: Variants = {
	animate: {
		borderRadius: [
			'60% 40% 30% 70% / 60% 30% 70% 40%',
			'30% 60% 70% 40% / 50% 60% 30% 60%',
			'60% 40% 30% 70% / 60% 30% 70% 40%',
			'40% 60% 60% 40% / 60% 30% 70% 40%',
			'60% 40% 30% 70% / 50% 60% 30% 60%',
			'60% 40% 30% 70% / 60% 30% 70% 40%',
		],
		transition: {
			duration: 5,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: 'reverse',
			ease: 'easeInOut' as const,
		},
	},
};

const ProfilePicture = () => {
	return (
		<div className="relative size-64">
			<motion.div
				variants={morphingBlob}
				animate="animate"
				className="absolute inset-0 z-0 transform translate-y-4 scale-110 blur-3xl opacity-60 overflow-hidden"
			>
				<div
					className="absolute inset-0 animate-spin-slow origin-center"
					style={{
						background:
							'conic-gradient(from 0deg, #FF9A9E 0%, #FECFEF 20%, #244bab 40%, #C2E9FB 60%, #FBC2EB 80%, #244bab 100%)',
					}}
				/>
			</motion.div>

			<div
				className="absolute inset-0 overflow-hidden shadow-2xl z-10"
				style={{
					maskImage:
						'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
					WebkitMaskImage:
						'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
					borderRadius: '30% 60% 70% 40% / 50% 80% 40% 60%',
				}}
			>
				<Image
					src="/images/profile.webp"
					alt="Jovan Profile"
					fill
					className="object-cover grayscale-[0.7] hover:grayscale-0 transition-all duration-500"
					priority
				/>
			</div>
		</div>
	);
};

export default ProfilePicture;
