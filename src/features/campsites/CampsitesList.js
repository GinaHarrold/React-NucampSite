import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsiteCard from "./CampsiteCard";
import {Col} from 'reactstrap'

const CampsitesList = () => {
   return(
    <div className='ms-auto'> 
    {CAMPSITES.map((campsite) => {
        return (
             <Col md='5' className='m-4' key={campsite.id}>
             <CampsiteCard campsite={campsite} />
             </Col>
         );
     })}
    </div>
   );
};

export default CampsitesList