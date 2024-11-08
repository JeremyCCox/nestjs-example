export default function Header(){
    return(
        <header className={'w-full h-[10vh] bg-amber-200 justify-between flex border-b-2 border-black px-[12%] '}>
            <div className={'border-2 border-black w-60 flex items-center justify-evenly text-5xl'}>
                EXAMPLE
            </div>
            <div className={'border-2 border-black flex items-center '}>
                <a target={'_blank'} href={'https://github.com/JeremyCCox/nestjs-example'} className={'flex w-16 h-16 my-2 mx-1'} type={"button"}>
                    <img alt={"Github Logo, link to the repo of this project."} src={'./github-mark.png'}/>
                </a>
                <a href={'/login'} className={'flex w-16 h-16 my-2 mx-1'}>
                   <img alt={'Login Symbol, link to the login page of this project'}/>
                </a>
            </div>
        </header>
    )
}