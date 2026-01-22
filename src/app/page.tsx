import HomePage from '@/components/pages/home';
import app from '@/config/app';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata({ title: "Hi I'm Jovan" });

export const revalidate = app.revalidate;

export default HomePage;
