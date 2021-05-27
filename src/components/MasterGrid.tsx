import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';


const MasterGrid: React.FC = () => {
    const [congress, setCongress] = useState('');
    
/*     const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 5,
        maxColumns: 6,
    }); 
 */

    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
      ];
      
      const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];



    const CallApi = async () => {
        try {
            // eslint-disable-next-line
            await fetch("http://localhost:5000/api/v1/congress")
                .then(res => res.json())
                .then(data => {
                    setCongress(data)
                })

        } catch(error) {
            console.log(error)
        }   
    }

    useEffect(() => {
        CallApi();
        console.log(congress)        
    },[]);

  return (
    <div>
        <span>{}</span>
    </div>
  );
}

export default MasterGrid;
