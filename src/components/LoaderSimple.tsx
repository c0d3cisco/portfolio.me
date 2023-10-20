


const LoaderSimple = () => {


	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<span className="canvas-load"></span>
			<p
				style={{
					fontSize: 14,
					color: "white",
					fontWeight: "800",
					marginTop: 40,
				}}
			>
				{'Loading... Thank you for your patience :)'}
			</p>
		</div>
	);
};

export default LoaderSimple