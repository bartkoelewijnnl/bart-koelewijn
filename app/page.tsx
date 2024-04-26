import { Row } from '@/components/layout';

const Page = () => {
    return (
        <div className="max-w-screen-2xl p-12 mx-auto gap-8 grid grid-cols-3">
            <div className='bg-[#ef5367] rounded-xl h-[500px]'>1</div>
            <div className='bg-purple-500'>2</div>
            <div className='bg-purple-500'>3</div>
        </div>
    );
};

export default Page;
