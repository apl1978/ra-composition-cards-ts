import { PropsWithChildren } from 'react';

export function Card({children, title, text}: PropsWithChildren<{title: string, text: string}>) {

    return (
        <div className='card' style={{width: '18rem'}}>
            {children}
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{text}</p>
                <a href='/#' className='btn btn-primary'>
                    Go somewhere
                </a>
            </div>
        </div>
    );
}
