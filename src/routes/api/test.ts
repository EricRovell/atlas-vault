import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function GET() {
	const data = await pb.collection("balcony").getFullList();

	return data;
}
