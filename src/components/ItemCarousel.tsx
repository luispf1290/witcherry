
import { Card} from "@mui/material"
import { Paragraph } from "./Paragraph"
import { Title } from "./Title"
import './carousel.css'

export interface PropsItems {
    titulo: String,
    subtitulo: String,
    img?: string,
    precio: string
}

export const ItemCarousel = ({titulo, subtitulo, img, precio}: PropsItems) => {
    return (
        <Card sx={{backgroundColor:'#1A1B1D', padding:'16px', boxShadow:'0px 0.1px 3.1px 0px #611C16'}}>
            <div className="card-header">
                <Title title={titulo} />
                <Paragraph paragraph={subtitulo} color='gray-p'/>

            </div>
            <div className="img-card">
                <img src={img} alt="img1" />
            </div>
            <div className="card-footer">
                <div className="container-price">
                    <p>{`$${precio}`}</p>
                </div>
            </div>
        </Card>
    )
}