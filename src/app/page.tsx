// "use client";
// import React from 'react';
// import { Input } from 'antd';
// import type { TableColumnsType } from 'antd';
// import FormItem from "antd/es/form/FormItem";
// import type { SearchProps } from 'antd/es/input/Search';
// import { Form, Select, Button, Table, Popover } from "antd";
// import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
// interface DataType {
//   key: string;
//   Partnumber: string;
//   PLCdata: string;
//   Previewimage: any;
//   Imagepath: string;
//   Updatetime: any;
//   Setup: any;
//   content: any;
// }
// const data: DataType[] = [
//   {
//     key: '1',
//     Partnumber: 'TG028200-78000',
//     PLCdata: 'TG028',
//     Previewimage: (<div></div>),
//     content:(
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4CwM0ERB6MSlcmaCD9oYoI2kKW_TIVsn3A&usqp=CAU" alt="" width="300" height="200" />
//       </div>),
//     Imagepath: 'C://Desktop/wi.jpg',
//     Updatetime: '21/01/2567  10.00',
//     Setup: <div></div>,
//   },
// {
//   key: '2',
//   Partnumber: 'TG028200-79000',
//   PLCdata: 'TG029',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '22/01/2567  10.00',
//   Setup: <div></div>,
// },
// {
//   key: '3',
//   Partnumber: 'TG028200-80000',
//   PLCdata: 'TG030',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://vs.mahidol.ac.th/mozwe/wp-content/uploads/2023/10/%E0%B8%99%E0%B8%81%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%A7%E0%B8%A5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%94%E0%B8%B2%E0%B8%82%E0%B8%99%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C_%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C-%E0%B8%A3%E0%B8%B1%E0%B8%A8%E0%B8%A1%E0%B8%B5-1-scaled.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '23/01/2567  10.00',
//   Setup: <div></div>
// },
// {
//   key: '4',
//   Partnumber: 'TG028200-81000',
//   PLCdata: 'TG031',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://s359.kapook.com/pagebuilder/1865be83-9374-4748-98a0-0323f814b2d2.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '24/01/2567  10.00',
//   Setup: <div></div>,
// },
// {
//   key: '5',
//   Partnumber: 'TG02800-82000',
//   PLCdata: 'TG032',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '25/01/2567  10.00',
//   Setup: <div></div>,
// },{
//   key: '6',
//   Partnumber: 'TG028200-83000',
//   PLCdata: 'TG033',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '26/01/2567  10.00',
//   Setup: <div></div>,
// },
// {
//   key: '7',
//   Partnumber: 'TG028200-84000',
//   PLCdata: 'TG034',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '27/01/2567  10.00',
//   Setup: <div></div>,
// },
// {
//   key: '8',
//   Partnumber: 'TG028200-85000',
//   PLCdata: 'TG035',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '28/01/2567  10.00',
//   Setup: <div></div>,
// },
// {
//   key: '9',
//   Partnumber: 'TG028200-86000',
//   PLCdata: 'TG036',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '29/01/2567  10.00',
//   Setup: <div></div>,
// },
// {
//   key: '10',
//   Partnumber: 'TG028200-87000',
//   PLCdata: 'TG037',
//   Previewimage: (<div></div>),
//   content:(
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//     <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//     </div>),
//   Imagepath: 'C://Desktop/wi.jpg',
//   Updatetime: '30/01/2567  10.00',
//   Setup: <div></div>,
// },
// ];
// const App: React.FC = () => {
//   const { Search } = Input;
//   const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
//   const columns: TableColumnsType<DataType> = [
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Part Number</span>,
//       dataIndex: 'Partnumber',
//       key: 'Partnumber',
//       width: '20%',
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>PLC Data</span>,
//       dataIndex: 'PLCdata',
//       key: 'PLCdata',
//       width: '20%',
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Preview Image</span>,
//       dataIndex: 'Previewimage',
//       key: 'Previewimage',
//       render: (_, record) => (
//         <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//           <Popover content={record.content} title="Preview Image">
//             <Button type="primary" style={{backgroundColor: '#4499fa', boxShadow: "3px 3px 10px 0px #073c79"}}>Show Image</Button>
//           </Popover>
//         </div>),
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Image Path</span>,
//       dataIndex: 'Imagepath',
//       key: 'Imagepath',
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Update Time</span>,
//       dataIndex: 'Updatetime',
//       key: 'Updatetime',
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Set UP</span>,
//       dataIndex: 'Setup',
//       key: 'Setup',
//       render: (_, record) => (
//         <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//           <Button type="primary" style={{ backgroundColor: '#139a40', boxShadow: "3px 3px 10px 0px #0b430f" }}>Edit</Button>
//           <Button type="primary" style={{ backgroundColor: '#ff4646', boxShadow: "3px 3px 10px 0px #570c0c" }}>Delete</Button>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div>
//       <div
//         style={{
//           paddingTop: "1rem",
//         }}>
//         <div
//           className="selector"
//           style={{
//             borderRadius: "20px",
//             boxShadow: "5px 5px 20px 0px rgba(50, 50, 50, .5)",
//             flex: "1",
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "back",
//             paddingBottom: "1rem"
//           }}>
//           <h1 style={{ fontFamily: 'YourChosenFont, sans-serif' }}>Administrator</h1>
//           <Form style={{ display: "flex", gap: "5rem" }} onFinish={(x) => console.log(x)}>
//             <FormItem
//               name="LineName"
//               rules={[{ required: true, message: "LineName is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20, color: 'back' }}>
//                   Line Name
//                 </span>}>
//               <Select
//                 showSearch
//                 placeholder="Select a LineName"
//                 style={{ width: 250 }}
//                 options={[
//                   { value: "ASSEMBLY", label: <span>ASSEMBLY</span> },
//                   { value: "PRODUCTION1", label: <span>PRODUCTION1</span> },
//                   { value: "PRODUCTION2", label: <span>PRODUCTION2</span> },]} />
//             </FormItem>
//             <FormItem
//               name="Process"
//               rules={[{ required: true, message: "Process is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20, color: 'back' }}>
//                   Process
//                 </span>}>
//                 <Select
//                 showSearch
//                 placeholder="Select a Process"
//                 style={{ width: 250 }}
//                 options={[
//                   { value: "CUTTING", label: <span>CUTTING</span> },
//                   { value: "WELDING", label: <span>WELDING</span> },
//                   { value: "TURNING", label: <span>TURNING</span> },
//                   { value: "DILLING", label: <span>DILLING</span> },
//                   { value: "MILLING", label: <span>MILLING</span> },]} />
//             </FormItem>
//             <FormItem
//               name="Part Number"
//               label={
//                 <span className="custom-label" style={{ fontSize: 20, color: 'back' }}>
//                   Part Number
//                 </span>}>
//                 <Search placeholder="Search a Part Number" allowClear onSearch={onSearch} style={{ width: 250 }}/>
//             </FormItem>
//             <FormItem
//               style={{
//                 display: "flex",
//                 alignItems: "right",
//                 justifyContent: "right"
//               }}>
//               <Button
//                 htmlType="submit"
//                 icon={<SearchOutlined />}
//                 style={{
//                   fontSize: 15,
//                   backgroundColor: "#fb00ff",
//                   color: "white",
//                   boxShadow: "3px 3px 10px 0px #9d09a0",
//                   borderBlockColor: "#fb00ff",
//                 }}>
//                 Search
//               </Button>
//             </FormItem>
//           </Form>
//         </div>
//       </div>
//         <div style={{ paddingTop: "1rem", paddingBottom: "1rem" , paddingRight: "1rem" , textAlign:"right" }}>
//           <Button type="primary" style={{ backgroundColor: '#5c5eff', boxShadow: "3px 3px 10px 0px #0e2563" }} icon={<PlusOutlined />}>Add</Button>
//         </div>
//       <div style={{ borderRadius: "10px", boxShadow: "5px 5px 20px 0px rgba(50, 50, 50, .5)", }}>
//         <Form>
//           <FormItem>
//             <Table
//               columns={columns}
//               bordered={true}
//               dataSource={data}
//               pagination={false}
//               scroll={{ y: 440 }}
//               style={{ paddingBottom: "0.5rem" }} />
//           </FormItem>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default App;




// "use client";
// import FormItem from "antd/es/form/FormItem";
// import type { SearchProps } from 'antd/es/input/Search';
// import { Form, Select, Button, Table, Popover, Input, Popconfirm  } from "antd";
// import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import type { GetRef } from 'antd';
// type InputRef = GetRef<typeof Input>;
// type FormInstance<T> = GetRef<typeof Form<T>>;
// const EditableContext = React.createContext<FormInstance<any> | null>(null);
// interface Item {
//   key: string;
//   Partnumber: string;
//   PLCdata: string;
//   Previewimage: any;
//   Imagepath: string;
//   Updatetime: any;
//   Setup: any;
//   content: any; }
// interface EditableRowProps { index: number; }
// const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
// const [form] = Form.useForm();
// return (
//   <Form form={form} component={false}>
//     <EditableContext.Provider value={form}>
//     <tr {...props}/>
//     </EditableContext.Provider>
//   </Form> );};
// interface EditableCellProps {
//   title: React.ReactNode;
//   editable: boolean;
//   children: React.ReactNode;
//   dataIndex: keyof Item;
//   record: Item;
//   handleSave: (record: Item) => void; }
// const EditableCell: React.FC<EditableCellProps> = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps }) => {
// const [editing, setEditing] = useState(false);
// const inputRef = useRef<InputRef>(null);
// const form = useContext(EditableContext)!;
//   useEffect(() => { if (editing) { inputRef.current!.focus(); }} , [editing]);
// const toggleEdit = () => { setEditing(!editing); form.setFieldsValue({[dataIndex]: record[dataIndex]}); };
// const save = async () => { try{ const values = await form.validateFields(); toggleEdit();
//       handleSave({ ...record, ...values }); }catch(errInfo){console.log('Save failed:', errInfo);} };
//   let childNode = children;
//   if (editable) {childNode = editing ? (
//       <Form.Item
//         style={{ margin: 0 }}
//         name={dataIndex}
//         rules={[{required: true, message: `${title} is required.`,}]}>
//         <Input ref={inputRef} onPressEnter={save} onBlur={save}/>
//       </Form.Item> ) : (
//       <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
//         {children}
//       </div> ); }
// return <td {...restProps}>{childNode}</td>; };
// type EditableTableProps = Parameters<typeof Table>[0];
// interface DataType {
//   key: React.Key;
//   Partnumber: string;
//   PLCdata: string;
//   Previewimage: any;
//   Imagepath: string;
//   Updatetime: any;
//   Setup: any;
//   content: any; }
// type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
// const App: React.FC = () => {
// const { Search } = Input;
// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
// const [dataSource, setDataSource] = useState<DataType[]>([
//     {
//     key: '0',
//     Partnumber: 'TG028200-70000',
//     PLCdata: 'TG 0',
//     Previewimage: (<div></div>),
//     content:(
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4CwM0ERB6MSlcmaCD9oYoI2kKW_TIVsn3A&usqp=CAU" alt="" width="300" height="200" />
//       </div>),
//     Imagepath: 'C://Desktop/wi.jpg',
//     Updatetime: '21/01/2567  10.00',
//     Setup: <div></div>,
//     },
//     {
//     key: '2',
//     Partnumber: 'TG028200-71000',
//     PLCdata: 'TG 1',
//     Previewimage: (<div></div>),
//     content:(
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
//       <img src="https://meowbarn.com/wp-content/uploads/2022/01/shutterstock_400713436.jpg" alt="" width="300" height="200" />
//       </div>),
//     Imagepath: 'C://Desktop/wi.jpg',
//     Updatetime: '22/01/2567  10.00',
//     Setup: <div></div>,
//     }, ]);
// const [count, setCount] = useState(2);
// const handleDelete = (key: React.Key) => {
// const newData = dataSource.filter((item) => item.key !== key); setDataSource(newData); };
// const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Part Number</span>,
//       dataIndex: 'Partnumber',
//       key: 'Partnumber',
//       width: '15%',
//       editable: true,
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>PLC Data</span>,
//       dataIndex: 'PLCdata',
//       key: 'PLCdata',
//       width: '10%',
//       editable: true,
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Preview Image</span>,
//       dataIndex: 'Previewimage',
//       key: 'Previewimage',
//       render: (_, record) => (
//         <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//           <Popover content={record.content} title="Preview Image">
//             <Button type="primary" style={{backgroundColor: '#4499fa', boxShadow: "3px 3px 10px 0px #073c79"}}>Show Image</Button>
//           </Popover>
//         </div>),
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Image Path</span>,
//       dataIndex: 'Imagepath',
//       key: 'Imagepath',
//     },
//     {
//       title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Update Time</span>,
//       dataIndex: 'Updatetime',
//       key: 'Updatetime',
//     },
// {
// title: <span style={{ fontSize: '18px' , display: 'flex', justifyContent: 'center' }}>Set UP</span>,
// dataIndex: 'Setup',
// key: 'Setup',
// render: (__, record: { key: React.Key }) => dataSource.length >= 1 ? (
//   <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
//     <Popconfirm title="Sure to save?" onConfirm={() => handleDelete(record.key)}>
//       <Button type="primary" style={{ backgroundColor: '#139a40', boxShadow: "3px 3px 10px 0px #0b430f" }}>Edit Summit</Button>
//     </Popconfirm>
//     <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//       <Button type="primary" style={{ backgroundColor: '#ff4646', boxShadow: "3px 3px 10px 0px #570c0c" }}>Delete</Button>
//     </Popconfirm>
//   </div>) : null,
//     }, ];
// const handleAdd = () => {
// const newData: DataType = {
//       key: count,
//       Partnumber: `Edit`,
//       PLCdata: `Edit`,
//       Previewimage: '',
//       Imagepath: 'C://Desktop/wi.jpg',
//       Updatetime: '22/01/2567  10.00', }; setDataSource([...dataSource, newData]); setCount(count + 1); };
// const handleSave = (row: DataType) => {
// const newData = [...dataSource];
// const index = newData.findIndex((item) => row.key === item.key);
// const item = newData[index]; newData.splice(index, 1, {...item, ...row, }); setDataSource(newData); };
// const components = {
//       body: {
//       row: EditableRow,
//       cell: EditableCell,
//     }, };
// const columns = defaultColumns.map((col) => {
//     if (!col.editable) {
//     return col; }
//     return {
//       ...col,
//       onCell: (record: DataType) => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave, }), }; });
// return (
//     <div style={{ paddingTop: "1rem" }}>
//       <div className="selector" style={{
//             borderRadius: "20px",
//             boxShadow: "5px 5px 20px 0px rgba(50, 50, 50, .5)",
//             flex: "1",
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "back",
//             paddingBottom: "1rem" }}>
//         <h1 style={{ fontFamily: 'YourChosenFont, sans-serif' }}>Administrator</h1>
//         <Form style={{ display: "flex", gap: "5rem" }} onFinish={(x) => console.log(x)}>
//         <FormItem
//               name="LineName"
//               rules={[{ required: true, message: "LineName is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20, color: 'back' }}>
//                   Line Name
//                 </span>}>
//               <Select
//                 showSearch
//                 placeholder="Select a LineName"
//                 style={{ width: 250 }}
//                 options={[
//                   { value: "ASSEMBLY", label: <span>ASSEMBLY</span> },
//                   { value: "PRODUCTION1", label: <span>PRODUCTION1</span> },
//                   { value: "PRODUCTION2", label: <span>PRODUCTION2</span> },]}/>
//             </FormItem>
//             <FormItem
//               name="Process"
//               rules={[{ required: true, message: "Process is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20, color: 'back' }}>
//                   Process
//                 </span>}>
//                 <Select
//                 showSearch
//                 placeholder="Select a Process"
//                 style={{ width: 250 }}
//                 options={[
//                   { value: "CUTTING", label: <span>CUTTING</span> },
//                   { value: "WELDING", label: <span>WELDING</span> },
//                   { value: "TURNING", label: <span>TURNING</span> },
//                   { value: "DILLING", label: <span>DILLING</span> },
//                   { value: "MILLING", label: <span>MILLING</span> },]}/>
//             </FormItem>
//             <FormItem
//               name="Part Number"
//               label={
//                 <span className="custom-label" style={{ fontSize: 20, color: 'back' }}>
//                   Part Number
//                 </span>}>
//                 <Search placeholder="Search a Part Number" allowClear onSearch={onSearch} style={{ width: 250 }}/>
//             </FormItem>
//             <FormItem
//               style={{
//                 display: "flex",
//                 alignItems: "right",
//                 justifyContent: "right"
//               }}>
//               <Button
//                 htmlType="submit"
//                 icon={<SearchOutlined />}
//                 style={{
//                   fontSize: 15,
//                   backgroundColor: "#fb00ff",
//                   color: "white",
//                   boxShadow: "3px 3px 10px 0px #9d09a0",
//                   borderBlockColor: "#fb00ff",
//                 }}>
//                 Search
//               </Button>
//             </FormItem>
//         </Form>
//       </div>
//       <div style={{ paddingRight: "1rem" , textAlign:"right" }}>
//         <Button onClick={handleAdd} type="primary"
//                 style={{ backgroundColor: '#5c5eff', boxShadow: "3px 3px 10px 0px #0e2563" , marginBottom: 10 , marginTop: 10 }}
//                 icon={<PlusOutlined />}>Add</Button>
//       </div>
//       <div style={{ borderRadius: "10px", boxShadow: "5px 5px 20px 0px rgba(50, 50, 50, .5)", }}>
//         <Table
//           components={components}
//           rowClassName={() => 'editable-row'}
//           bordered
//           dataSource={dataSource}
//           columns={columns as ColumnTypes}
//           pagination={false}
//           scroll={{ y: 470 }}
//           style={{ paddingBottom: "0.5rem" }}/>
//       </div>
//     </div>
//   );
// };
// export default App;







// // "use client"
// // import React, { useState, useEffect } from "react";
// // import type { SearchProps } from "antd/es/input/Search";
// // import { PlusOutlined } from "@ant-design/icons";
// // import {
// //   Button,
// //   Input,
// //   Table,
// //   Form,
// //   Select,
// //   InputNumber,
// //   Popconfirm,
// //   Typography,
// //   Popover,
// // } from "antd";
// // import FormItem from "antd/es/form/FormItem";
// // import axios from "axios";
// // import "@fortawesome/fontawesome-free/css/all.css";

// // interface Item {
// //   key: string;
// //   id: number;
// //   part_number: string;
// //   plc_data: string;
// //   image_path: string;
// //   updated_at: any;
// // }

// // interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
// //   editing: boolean;
// //   dataIndex: string;
// //   title: any;
// //   inputType: "number" | "text";
// //   record: Item;
// //   index: number;
// //   children: React.ReactNode;
// // }

// // const EditableCell: React.FC<EditableCellProps> = ({
// //   editing,
// //   dataIndex,
// //   title,
// //   inputType,
// //   record,
// //   index,
// //   children,
// //   ...restProps
// // }) => {
// //   const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
// //   return (
// //     <td {...restProps}>
// //       {editing ? (
// //         <Form.Item
// //           name={dataIndex}
// //           style={{ margin: 0 }}
// //           rules={[{ required: true, message: `Please Input ${title}!` }]}
// //         >
// //           {" "}
// //           {inputNode}{" "}
// //         </Form.Item>
// //       ) : (
// //         children
// //       )}{" "}
// //     </td>
// //   );
// // };

// // const App: React.FC = () => {
// //   const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
// //     console.log(info?.source, value);
// //   const [linename, setlinename] = useState<any>([]);
// //   const [resultProcess, setProcess] = useState<any>([]);
// //   const [resultPart_number, setPart_number] = useState<any>([]);
// //   const [form] = Form.useForm();
// //   const [editingKey, setEditingKey] = useState("");
// //   const [data, setData] = useState<any>([]);
// //   const [maxId, setMaxId] = useState<any>([]);
// //   const isEditing = (record: Item) => record.key === editingKey;

// //   const [Partno, setPartno] = useState<any>([]);

// //   const edit = (record: Partial<Item> & { key: React.Key }) => {
// //     form.setFieldsValue({
// //       art_number: "",
// //       plc_data: "",
// //       image_path: "",
// //       ...record,
// //     });
// //     setEditingKey(record.key);
// //   };
// //   const cancel = () => {
// //     setEditingKey("");
// //   };
// //   const save = async (key: React.Key, record: any) => {
// //     try {
// //       const row = (await form.validateFields()) as Item;
// //       const newData = [...data];
// //       const index = newData.findIndex((item) => key === item.key);
// //       if (index > -1) {
// //         const item = newData[index];
// //         newData.splice(index, 1, { ...item, ...row });
// //         setData(newData);
// //         setEditingKey("");
// //       } else {
// //         newData.push(row);
// //         setData(newData);
// //         setEditingKey("");
// //       }
// //     } catch (errInfo) {
// //       console.log("Validate Failed:", errInfo);
// //     }
// //   };

// //   useEffect(() => {
// //     (async () => {
// //       const response = await axios.get("http://localhost:8000/get_linename");
// //       if (response.status === 200) {
// //         setlinename(response.data);
// //         console.log("Get linename sucess");
// //       }
// //     })();
// //   }, []);

// //   useEffect(() => {
// //     console.log(linename);
// //   }, []);
// //   const handleChange = async (value: string) => {
// //     const line_name = form.getFieldValue("LineName");
// //     const responseProcess = await axios.get(
// //       "http://localhost:8000/get_resultProcess",
// //       { params: { line_name: line_name } }
// //     );

// //     if (responseProcess.status === 200) {
// //       setProcess(responseProcess.data);
// //       console.log("ResultProcess", resultProcess);
// //     }
// //     console.log(`selected ${value}`);
// //   };

// //   const handlepartnumber = async (value: string) => {
// //     const line_name = form.getFieldValue("LineName");
// //     const process = form.getFieldValue("Process");
// //     const response = await axios.get(
// //       "http://localhost:8000/get_resultPart_number",
// //       { params: { line_name: line_name, process: process } }
// //     );
// //     if (response.status === 200) {
// //       setPartno(response.data);
// //       console.log(Partno);
// //     }
// //   };

// //   interface uniqueItem {
// //     value: string;
// //   }

// //   function removeDuplicates(data: uniqueItem[]): uniqueItem[] {
// //     const uniqueData: uniqueItem[] = [];
// //     const uniqueValues = new Set<string>();
// //     for (const item of data) {
// //       if (!uniqueValues.has(item.value)) {
// //         uniqueValues.add(item.value);
// //         uniqueData.push(item);
// //       }
// //     }
// //     return uniqueData;
// //   }

// //   const uniqueLineName = removeDuplicates(linename);
// //   const uniquePart_number = removeDuplicates(resultPart_number);
// //   const uniqueProcess = removeDuplicates(resultProcess);
// //   const showData = async () => {
// //     const line_name = form.getFieldValue("LineName");
// //     const process = form.getFieldValue("Process");
// //     const part_number = form.getFieldValue("Part Number");
// //     const response_database = await axios.get("http://localhost:8000/get_data");
// //     const responsedata = await axios.get(
// //       "http://localhost:8000/get_resultdata",
// //       {
// //         params: {
// //           line_name: line_name,
// //           process: process,
// //           part_number: part_number,
// //         },
// //       }
// //     );
// //     if (responsedata.status === 200) {
// //       const dataWithKeys = responsedata.data.map(
// //         (item: any, index: number) => ({ key: (index + 1).toString(), ...item })
// //       );
// //       setData(dataWithKeys);
// //       console.log("data on table :", dataWithKeys);
// //     }
// //     if (response_database.status === 200) {
// //       const max = response_database.data.reduce(
// //         (prev: any, current: any) =>
// //           prev.value > current.value ? prev : current,
// //         0
// //       );
// //       const maxV: number | null = max ? max.id : null;
// //       const maxValue = maxV !== null ? maxV + 1 : null;
// //       setMaxId(maxValue);
// //       console.log("max :", maxValue);
// //     }
// //   };
// //   const handleDelete = (key: React.Key) => {
// //     const newData = data.filter((item: any) => item.key !== key);
// //     setData(newData);
// //   };
// //   const handleAdd = () => {
// //     const newData: Item = {
// //       key: String(data.length + 1),
// //       id: maxId,
// //       part_number: "",
// //       plc_data: "",
// //       image_path: "",
// //       updated_at: "",
// //     };
// //     setData([...data, newData]);
// //     setEditingKey(newData.key);
// //   };
// //   const columns = [
// //     {
// //       title: "Part number",
// //       dataIndex: "part_number",
// //       width: 250,
// //       editable: true,
// //     },

// //     { title: "PLC data", dataIndex: "plc_data", width: 240, editable: true },

// //     { title: "Image path", dataIndex: "image_path" },

// //     {
// //       title: "Preview image",
// //       dataIndex: "Previewimage",
// //       key: "Previewimage",

// //       width: 150,
// //       render: (_: any, record: any) => (
// //         <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
// //           <Popover
// //             content={
// //               <img src={record.image_path} alt="" width="300" height="200" />
// //             }
// //             title={record.part_number}
//           >
//             <Button
//               type="primary"
//               style={{
//                 backgroundColor: "#4499fa",
//                 boxShadow: "3px 3px 10px 0px #073c79",
//               }}
//             >
//               Show Image
//             </Button>
//           </Popover>
//         </div>
//       ),
//     },
//     { title: "Update time", dataIndex: "updated_at", width: 300 },

//     {
//       title: "Action",
//       dataIndex: "action",

//       width: 150,
//       render: (_: any, record: Item) => {
//         const editable = isEditing(record);
//         return (
//           <span
//             style={{ display: "flex", gap: "10px", justifyContent: "center" }}
//           >
//             {editable ? (
//               <span>
//                 <Typography.Link
//                   onClick={() => save(record.key, record)}
//                   style={{
//                     backgroundColor: "#68c3cf",
//                     boxShadow: "3px 3px 10px 0px #16656f",
//                     borderRadius: "20px",
//                     padding: "15px",
//                     color: "white",
//                     marginRight: "10px",
//                   }}
//                   className="fa fa-save"
//                 >
//                   {" "}
//                 </Typography.Link>
//                 <Popconfirm
//                   title="Sure to cancel?"
//                   onConfirm={cancel}
//                   className="fa fa-remove"
//                 >
//                   <a
//                     style={{
//                       backgroundColor: "#cfc768",
//                       boxShadow: "3px 3px 10px 0px #746b0a",
//                       borderRadius: "20px",
//                       padding: "15px",
//                       color: "white",
//                       marginLeft: "10px",
//                     }}
//                   ></a>
//                 </Popconfirm>
//               </span>
//             ) : (
//               <span style={{ borderWidth: "200px" }}>
//                 <Typography.Link
//                   disabled={editingKey !== ""}
//                   onClick={() => edit(record)}
//                   style={{
//                     backgroundColor: "#139a40",
//                     boxShadow: "3px 3px 10px 0px #0b430f",
//                     borderRadius: "20px",
//                     padding: "15px",
//                     color: "white",
//                     marginRight: "10px",
//                   }}
//                   className="fa fa-edit"
//                 ></Typography.Link>
//                 <Popconfirm
//                   title="Sure to delete?"
//                   onConfirm={() => handleDelete(record.key)}
//                 >
//                   <a
//                     style={{
//                       backgroundColor: "#ff4646",
//                       boxShadow: "3px 3px 10px 0px #570c0c",
//                       borderRadius: "20px",
//                       padding: "15px",
//                       color: "white",
//                       marginLeft: "10px",
//                     }}
//                     className="fa fa-trash"
//                   ></a>
//                 </Popconfirm>
//               </span>
//             )}
//           </span>
//         );
//       },
//     },
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record: Item) => ({
//         record,
//         inputType: col.dataIndex,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });
//   return (
//     <div>
//       <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
//         <div
//           className="selector"
//           style={{
//             borderRadius: "20px",
//             boxShadow: "5px 5px 20px 0px rgba(50, 50, 50, .5)",
//             flex: "1",
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             paddingBottom: "1rem",
//           }}
//         >
//           {" "}
//           <h1>Admin</h1>
//           <Form
//             form={form}
//             style={{ display: "flex", gap: "3rem" }}
//             onFinish={(x) => console.log(x)}
//           >
//             <FormItem
//               name="LineName"
//               rules={[{ required: true, message: "LineName is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20 }}>
//                   {" "}
//                   Line Name{" "}
//                 </span>
//               }
//             >
//               <Select
//                 showSearch
//                 placeholder="Select a LineName"
//                 style={{ width: 250 }}
//                 onChange={handleChange}
//                 options={uniqueLineName}
//               />
//             </FormItem>
//             <FormItem
//               name="Process"
//               rules={[{ required: true, message: "Process is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20 }}>
//                   {" "}
//                   Process{" "}
//                 </span>
//               }
//             >
//               <Select
//                 showSearch
//                 allowClear
//                 placeholder="Select a Process"
//                 style={{ width: 250 }}
//                 options={uniqueProcess}
//                 loading={uniqueProcess.length < 1 ? true : false}
//                 disabled={uniqueProcess.length < 1}
//                 onChange={handlepartnumber}
//               />
//             </FormItem>
//             <FormItem
//               name="Part Number"
//               rules={[{ required: true, message: "Part Number is required" }]}
//               label={
//                 <span className="custom-label" style={{ fontSize: 20 }}>
//                   {" "}
//                   Part Number{" "}
//                 </span>
//               }
//             >
//               <Select
//                 showSearch
//                 allowClear
//                 placeholder="Search a Part Number"
//                 style={{ width: 250 }}
//                 options={Partno}
//                 loading={uniquePart_number.length < 1 ? true : false}
//                 disabled={uniquePart_number.length < 1}
//               />
//             </FormItem>
//             <FormItem
//               style={{
//                 display: "flex",
//                 alignItems: "right",
//                 justifyContent: "right",
//               }}
//             >
//               <Button
//                 onClick={showData}
//                 htmlType="submit"
//                 style={{
//                   fontSize: 15,
//                   backgroundColor: "#fb00ff",
//                   color: "white",
//                   boxShadow: "3px 3px 10px 0px #9d09a0",
//                   borderBlockColor: "#fb00ff",
//                 }}
//               >
//                 {" "}
//                 Search.<i className="fa fa-search"></i>
//               </Button>
//             </FormItem>
//           </Form>
//         </div>
//       </div>
//       <div>
//         <Form form={form} component={false}>
//           <FormItem
//             style={{
//               display: "flex",
//               alignItems: "right",
//               justifyContent: "right",
//               paddingRight: "0.5rem",
//             }}
//           >
//             <Button
//               onClick={() => {
//                 handleAdd();
//                 console.log(maxId);
//               }}
//               type="primary"
//               style={{
//                 backgroundColor: "#5c5eff",
//                 boxShadow: "3px 3px 10px 0px #0e2563",
//               }}
//               icon={<PlusOutlined />}
//             >
//               Add
//             </Button>
//           </FormItem>
//           <div
//             style={{
//               borderRadius: "10px",
//               boxShadow: "5px 5px 20px 0px rgba(50, 50, 50, .5)",
//             }}
//           >
//             <Table
//               className="Table123"
//               components={{ body: { cell: EditableCell } }}
//               dataSource={data}
//               columns={mergedColumns}
//               onRow={(record) => ({
//                 onClick: async () => {
//                   console.log(record);
//                 },
//               })}
//               rowClassName="editable-row"
//               rowKey={(record) => record.key}
//               pagination={false}
//               scroll={{ y: 460 }}
//               style={{ paddingBottom: "0.5rem" }}
//             />
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default App;




// "use client";
// import React, { useState } from 'react';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// import type { GetProp, UploadFile, UploadProps } from 'antd';

// type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

// const App: React.FC = () => {
//   const [fileList, setFileList] = useState<UploadFile[]>([]);
//   const [uploading, setUploading] = useState(false);

//   const handleUpload = () => {
//     const formData = new FormData();
//     fileList.forEach((file) => {
//       formData.append('files[]', file as FileType);
//     });
//     setUploading(true);
//     // You can use any AJAX library you like
//     fetch('http://192.168.2.109:3000/', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setFileList([]);
//         message.success('upload successfully.');
//       })
//       .catch(() => {
//         message.error('upload failed.');
//       })
//       .finally(() => {
//         setUploading(false);
//       });
//   };

//   const props: UploadProps = {
//     onRemove: (file) => {
//       const index = fileList.indexOf(file);
//       const newFileList = fileList.slice();
//       newFileList.splice(index, 1);
//       setFileList(newFileList);
//     },
//     beforeUpload: (file) => {
//       setFileList([...fileList, file]);

//       return false;
//     },
//     fileList,
//   };

//   return (
//     <>
//       <Upload {...props}>
//         <Button icon={<UploadOutlined />}>Select File</Button>
//       </Upload>
//       <Button
//         type="primary"
//         onClick={handleUpload}
//         disabled={fileList.length === 0}
//         loading={uploading}
//         style={{ marginTop: 16 }}
//       >
//         {uploading ? 'Uploading' : 'Start Upload'}
//       </Button>
//     </>
//   );
// };

// export default App;







// import React from 'react';
// import { Line } from '@ant-design/charts';

// const Page: React.FC = () => {
//   const data = [
//     { year: '1991', value: 3 },
//     { year: '1992', value: 4 },
//     { year: '1993', value: 3.5 },
//     { year: '1994', value: 5 },
//     { year: '1995', value: 4.9 },
//     { year: '1996', value: 6 },
//     { year: '1997', value: 7 },
//     { year: '1998', value: 9 },
//     { year: '1999', value: 13 },
//   ];

//   const config = {
//     data,
//     xField: 'year',
//     yField: 'value',
//   };

//   return <Line {...config} />;
// };
// export default Page;