import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		var data2 = [];
		axios
			.get("https://gorecce-backend.herokuapp.com/users")
			.then((response) => {
				const data = response.data;
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					const user = {
						id: i + 1,
						email: data[i].personalInfo.email,
						username: data[i].personalInfo.fullName,
						Mobile: data[i].personalInfo.mobile,
						img: data[i].personalInfo.profile_pic,
						JoinedAs: data[i].personalInfo.booking_type,
						Address: "",
						Country: "India",
						BankName: "lorem ipsum 1",
						IFSC_Code: "ABC12345",
						AcNo: "123456",
						UPI: "ABC123",
						UserID: data[i].id,
						bookingInfo: data[i].listedLocations,
					};
					console.log(user);
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
	}, []);

	console.log(data);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<div className="datatableTitle">
				Add New User
				<Link to="/users/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;