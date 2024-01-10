import React from 'react';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';

const data = [
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    { column1: 'Data A', column2: 'Data B', column3: 'Data C', column4: 'Data D' },
    // Add more data as needed
  ];

const Exams = () => {
    return <div>
        <Button to="/newExam">
             Novo exame
        </Button>

        <div>
            <h1 style={{margin: 30}}>Exames</h1>
            <Table data={data} />
        </div>


    
    </div>;
};

export default Exams;
