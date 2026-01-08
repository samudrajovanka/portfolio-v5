'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Activity, useEffect, useState } from 'react';
import { EncryptedText } from '../../ui/encrypted-text';
import type { PreloadPageProps } from './types';

const PreloadPage = ({ children, noPreload }: PreloadPageProps) => {
	const [isLoading, setIsLoading] = useState(!noPreload);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Activity mode={noPreload ? 'hidden' : 'visible'}>
				<AnimatePresence mode="wait">
					{isLoading && (
						<motion.div
							className="fixed inset-0 z-50 grid place-content-center bg-background"
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
						>
							<EncryptedText
								text=">_ HELLO WORLD"
								className="text-2xl font-mono font-bold tracking-widest text-primary"
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</Activity>

			<AnimatePresence mode="wait">
				{!isLoading && (
					<motion.div
						key="content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default PreloadPage;
