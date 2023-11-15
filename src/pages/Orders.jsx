import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcekExport, PdfExport, Edit, Inject, ExcelExport,Search, Toolbar } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems,ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl z-30'>
      <Header category="Page" title="Orders"/>
      <GridComponent id='gridcomp' dataSource={ordersData} allowPaging allowSorting toolbar={['Search']} width='auto'> 
        <ColumnsDirective>
          {ordersGrid.map((item,index)=>(
            <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Search, ContextMenu,Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Orders