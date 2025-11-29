import { Canvas as R3fCanvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Example1 from './Example1';

const Canvas = () => {
    return (
        <R3fCanvas
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
            }}>
            <Suspense fallback={null}>
                <Example1 />
            </Suspense>
        </R3fCanvas>
    );
};

export default Canvas;
