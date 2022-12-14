import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Photo = ({ data }) => {
	const addPhoto = () => {
		console.log("Add Photo");
	};
	return (
		<div>
			<div className="location-primary-heading">Photo Gallery</div>
			<div className="location-photo-gallery">
				{data.images.map((item, ind) => (
					<img src={item} alt="Location" className="location-photo" key={ind} />
				))}
				<div
					className="location-photo"
					onClick={addPhoto}
					style={{
						border: "1px solid #6439ff",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
					}}>
					<AddIcon
						sx={{
							width: "40px",
							height: "40px",
							color: "#6439ff",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Photo;
