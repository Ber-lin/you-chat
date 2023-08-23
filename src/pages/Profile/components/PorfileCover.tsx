import { useHover } from "ahooks"
import UploadHeader from "./UploadHeaderCpn"
import { useEffect, useRef } from "react"
import { CSSTransition } from 'react-transition-group';
import "../index.less";

interface IProps {
    url: string
}
export default ({ url }: IProps) => {
    const hoverRef = useRef(null);
    const targetRef = useRef(null);
    const isHoverHeader = useHover(hoverRef);
    useEffect(() => { console.log(isHoverHeader); }, [isHoverHeader])
    return (
        <div className="w-full shadow relative min-h-[12em]" ref={hoverRef}>
            {
                url ? <img
                    className='absolute inset-0 min-h-[12em] max-h-[20em] h-full w-full object-cover object-center'
                    alt="header"
                    src={url}
                /> : !isHoverHeader ? <div className="absolute inset-0 items-center justify-center flex">
                    <span className="text-xl font-semibold">暂无封面，是否上传？</span>
                </div> : null
            }

            <CSSTransition
                nodeRef={targetRef}
                in={isHoverHeader}
                mountOnEnter
                timeout={200}
                classNames={"hover"}
            >
                <div className="absolute inset-0" ref={targetRef}>
                    <div className="absolute inset-0 bg-white opacity-70"></div>
                    <UploadHeader className="relative p-8" />
                </div>
            </CSSTransition>

        </div>
    )
}