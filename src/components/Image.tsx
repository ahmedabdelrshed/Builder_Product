interface IProps {
    src:string,
    alt:string
    className:string,
}

const Image = ({src,alt ,className}: IProps) => {
  return (
        <img className={className} src={src} alt={alt}  />
  )
}

export default Image