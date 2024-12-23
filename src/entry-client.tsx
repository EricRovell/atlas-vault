// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

const root = document.getElementById("app");

if (!root) {
	throw new Error("Can't find the root element to mount");
}

mount(() => <StartClient />, root);
