// Bleeding-Edge Imports
import EntityData from '@site/src/api/Classes/BaseEntity.json';
import ActorData from '@site/src/api/Classes/BaseActor.json';
import PickableData from '@site/src/api/Classes/BasePickable.json';
import PaintableData from '@site/src/api/Classes/BasePaintable.json';
import DamageableData from '@site/src/api/Classes/BaseDamageable.json';

import BillboardData from '@site/src/api/Classes/Billboard.json';
import BlueprintData from '@site/src/api/Classes/Blueprint.json';
import CableData from '@site/src/api/Classes/Cable.json';
import CanvasData from '@site/src/api/Classes/Canvas.json';
import CharacterData from '@site/src/api/Classes/Character.json';
import CharacterSimpleData from '@site/src/api/Classes/CharacterSimple.json';
import DatabaseData from '@site/src/api/Classes/Database.json';
import DecalData from '@site/src/api/Classes/Decal.json';
import FileData from '@site/src/api/Classes/File.json';
import GrenadeData from '@site/src/api/Classes/Grenade.json';
import LightData from '@site/src/api/Classes/Light.json';
import MeleeData from '@site/src/api/Classes/Melee.json';
import ParticleData from '@site/src/api/Classes/Particle.json';
import PlayerData from '@site/src/api/Classes/Player.json';
import PropData from '@site/src/api/Classes/Prop.json';
import SceneCaptureData from '@site/src/api/Classes/SceneCapture.json';
import StaticMeshData from '@site/src/api/Classes/StaticMesh.json';
import SoundData from '@site/src/api/Classes/Sound.json';
import TextRenderData from '@site/src/api/Classes/TextRender.json';
import TriggerData from '@site/src/api/Classes/Trigger.json';
import VehicleData from '@site/src/api/Classes/Vehicle.json';
import WeaponData from '@site/src/api/Classes/Weapon.json';
import WebUIData from '@site/src/api/Classes/WebUI.json';
import WidgetData from '@site/src/api/Classes/Widget.json';

import ColorData from '@site/src/api/Structs/Color.json';
import MatrixData from '@site/src/api/Structs/Matrix.json';
import RotatorData from '@site/src/api/Structs/Rotator.json';
import QuatData from '@site/src/api/Structs/Quat.json';
import VectorData from '@site/src/api/Structs/Vector.json';
import Vector2DData from '@site/src/api/Structs/Vector2D.json';

import AssetsData from '@site/src/api/StaticClasses/Assets.json';
import ChatData from '@site/src/api/StaticClasses/Chat.json';
import ClientData from '@site/src/api/StaticClasses/Client.json';
import ConsoleData from '@site/src/api/StaticClasses/Console.json';
import DebugData from '@site/src/api/StaticClasses/Debug.json';
import DiscordData from '@site/src/api/StaticClasses/Discord.json';
import EventsData from '@site/src/api/StaticClasses/Events.json';
import HTTPData from '@site/src/api/StaticClasses/HTTP.json';
import InputData from '@site/src/api/StaticClasses/Input.json';
import LevelData from '@site/src/api/StaticClasses/Level.json';
import NavigationData from '@site/src/api/StaticClasses/Navigation.json';
import PackageData from '@site/src/api/StaticClasses/Package.json';
import PostProcessData from '@site/src/api/StaticClasses/PostProcess.json';
import ServerData from '@site/src/api/StaticClasses/Server.json';
import SkyData from '@site/src/api/StaticClasses/Sky.json';
import SteamData from '@site/src/api/StaticClasses/Steam.json';
import TimerData from '@site/src/api/StaticClasses/Timer.json';
import TraceData from '@site/src/api/StaticClasses/Trace.json';
import ViewportData from '@site/src/api/StaticClasses/Viewport.json';

import JSONData from '@site/src/api/UtilityClasses/JSON.json';
import NanosMathData from '@site/src/api/UtilityClasses/NanosMath.json';
import NanosUtilsData from '@site/src/api/UtilityClasses/NanosUtils.json';

import StringData from '@site/src/api/StandardLibraries/string.json';
import TableData from '@site/src/api/StandardLibraries/table.json';
import MathData from '@site/src/api/StandardLibraries/math.json';


// Stable Imports
import EntityDataStable from '@site/src/api/Stable/Classes/BaseEntity.json';
import ActorDataStable from '@site/src/api/Stable/Classes/BaseActor.json';
import PickableDataStable from '@site/src/api/Stable/Classes/BasePickable.json';
import PaintableDataStable from '@site/src/api/Stable/Classes/BasePaintable.json';
// import DamageableDataStable from '@site/src/api/Stable/Classes/BaseDamageable.json';

import BillboardDataStable from '@site/src/api/Stable/Classes/Billboard.json';
import BlueprintDataStable from '@site/src/api/Stable/Classes/Blueprint.json';
import CableDataStable from '@site/src/api/Stable/Classes/Cable.json';
import CanvasDataStable from '@site/src/api/Stable/Classes/Canvas.json';
import CharacterDataStable from '@site/src/api/Stable/Classes/Character.json';
import CharacterSimpleDataStable from '@site/src/api/Stable/Classes/CharacterSimple.json';
import DatabaseDataStable from '@site/src/api/Stable/Classes/Database.json';
import DecalDataStable from '@site/src/api/Stable/Classes/Decal.json';
import FileDataStable from '@site/src/api/Stable/Classes/File.json';
import GrenadeDataStable from '@site/src/api/Stable/Classes/Grenade.json';
import LightDataStable from '@site/src/api/Stable/Classes/Light.json';
import MeleeDataStable from '@site/src/api/Stable/Classes/Melee.json';
import ParticleDataStable from '@site/src/api/Stable/Classes/Particle.json';
import PlayerDataStable from '@site/src/api/Stable/Classes/Player.json';
import PropDataStable from '@site/src/api/Stable/Classes/Prop.json';
import SceneCaptureDataStable from '@site/src/api/Stable/Classes/SceneCapture.json';
import StaticMeshDataStable from '@site/src/api/Stable/Classes/StaticMesh.json';
import SoundDataStable from '@site/src/api/Stable/Classes/Sound.json';
import TextRenderDataStable from '@site/src/api/Stable/Classes/TextRender.json';
import TriggerDataStable from '@site/src/api/Stable/Classes/Trigger.json';
import VehicleDataStable from '@site/src/api/Stable/Classes/Vehicle.json';
import WeaponDataStable from '@site/src/api/Stable/Classes/Weapon.json';
import WebUIDataStable from '@site/src/api/Stable/Classes/WebUI.json';
// import WidgetDataStable from '@site/src/api/Stable/Classes/Widget.json';

import ColorDataStable from '@site/src/api/Stable/Structs/Color.json';
import MatrixDataStable from '@site/src/api/Stable/Structs/Matrix.json';
import RotatorDataStable from '@site/src/api/Stable/Structs/Rotator.json';
import QuatDataStable from '@site/src/api/Stable/Structs/Quat.json';
import VectorDataStable from '@site/src/api/Stable/Structs/Vector.json';
import Vector2DDataStable from '@site/src/api/Stable/Structs/Vector2D.json';

import AssetsDataStable from '@site/src/api/Stable/StaticClasses/Assets.json';
import ChatDataStable from '@site/src/api/Stable/StaticClasses/Chat.json';
import ClientDataStable from '@site/src/api/Stable/StaticClasses/Client.json';
import ConsoleDataStable from '@site/src/api/Stable/StaticClasses/Console.json';
import DebugDataStable from '@site/src/api/Stable/StaticClasses/Debug.json';
import DiscordDataStable from '@site/src/api/Stable/StaticClasses/Discord.json';
import EventsDataStable from '@site/src/api/Stable/StaticClasses/Events.json';
import HTTPDataStable from '@site/src/api/Stable/StaticClasses/HTTP.json';
import InputDataStable from '@site/src/api/Stable/StaticClasses/Input.json';
import LevelDataStable from '@site/src/api/Stable/StaticClasses/Level.json';
import NavigationDataStable from '@site/src/api/Stable/StaticClasses/Navigation.json';
import PackageDataStable from '@site/src/api/Stable/StaticClasses/Package.json';
import PostProcessDataStable from '@site/src/api/Stable/StaticClasses/PostProcess.json';
import ServerDataStable from '@site/src/api/Stable/StaticClasses/Server.json';
import SkyDataStable from '@site/src/api/Stable/StaticClasses/Sky.json';
import SteamDataStable from '@site/src/api/Stable/StaticClasses/Steam.json';
import TimerDataStable from '@site/src/api/Stable/StaticClasses/Timer.json';
import TraceDataStable from '@site/src/api/Stable/StaticClasses/Trace.json';
import ViewportDataStable from '@site/src/api/Stable/StaticClasses/Viewport.json';

import JSONDataStable from '@site/src/api/Stable/UtilityClasses/JSON.json';
import NanosMathDataStable from '@site/src/api/Stable/UtilityClasses/NanosMath.json';
import NanosUtilsDataStable from '@site/src/api/Stable/UtilityClasses/NanosUtils.json';

// import StringDataStable from '@site/src/api/Stable/StandardLibraries/string.json';
// import TableDataStable from '@site/src/api/Stable/StandardLibraries/table.json';
// import MathDataStable from '@site/src/api/Stable/StandardLibraries/math.json';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const APIData = {
	Stable: {
		Class: {
			Entity: EntityDataStable,
			Actor: ActorDataStable,
			Pickable: PickableDataStable,
			Paintable: PaintableDataStable,
			// Damageable: DamageableDataStable,
			Billboard: BillboardDataStable,
			Blueprint: BlueprintDataStable,
			Cable: CableDataStable,
			Canvas: CanvasDataStable,
			Character: CharacterDataStable,
			CharacterSimple: CharacterSimpleDataStable,
			Database: DatabaseDataStable,
			Decal: DecalDataStable,
			File: FileDataStable,
			Grenade: GrenadeDataStable,
			Light: LightDataStable,
			Melee: MeleeDataStable,
			Particle: ParticleDataStable,
			Player: PlayerDataStable,
			Prop: PropDataStable,
			SceneCapture: SceneCaptureDataStable,
			StaticMesh: StaticMeshDataStable,
			Sound: SoundDataStable,
			TextRender: TextRenderDataStable,
			Trigger: TriggerDataStable,
			Vehicle: VehicleDataStable,
			Weapon: WeaponDataStable,
			WebUI: WebUIDataStable,
			// Widget: WidgetDataStable,
		},
		Struct: {
			Color: ColorDataStable,
			Matrix: MatrixDataStable,
			Quat: QuatDataStable,
			Rotator: RotatorDataStable,
			Vector: VectorDataStable,
			Vector2D: Vector2DDataStable,
		},
		StaticClass: {
			Assets: AssetsDataStable,
			Chat: ChatDataStable,
			Client: ClientDataStable,
			Console: ConsoleDataStable,
			Debug: DebugDataStable,
			Discord: DiscordDataStable,
			Events: EventsDataStable,
			HTTP: HTTPDataStable,
			Input: InputDataStable,
			Level: LevelDataStable,
			Navigation: NavigationDataStable,
			Package: PackageDataStable,
			PostProcess: PostProcessDataStable,
			Server: ServerDataStable,
			Sky: SkyDataStable,
			Steam: SteamDataStable,
			Timer: TimerDataStable,
			Trace: TraceDataStable,
			Viewport: ViewportDataStable,
		},
		UtilityClass: {
			JSON: JSONDataStable,
			NanosMath: NanosMathDataStable,
			NanosUtils: NanosUtilsDataStable,
		},
		// StandardLibrary: {
			// string: StringDataStable,
			// math: MathDataStable,
			// table: TableDataStable,
		// }
	},
	BleedingEdge: {
		Class: {
			Entity: EntityData,
			Actor: ActorData,
			Pickable: PickableData,
			Paintable: PaintableData,
			Damageable: DamageableData,
			Billboard: BillboardData,
			Blueprint: BlueprintData,
			Cable: CableData,
			Canvas: CanvasData,
			Character: CharacterData,
			CharacterSimple: CharacterSimpleData,
			Database: DatabaseData,
			Decal: DecalData,
			File: FileData,
			Grenade: GrenadeData,
			Light: LightData,
			Melee: MeleeData,
			Particle: ParticleData,
			Player: PlayerData,
			Prop: PropData,
			SceneCapture: SceneCaptureData,
			StaticMesh: StaticMeshData,
			Sound: SoundData,
			TextRender: TextRenderData,
			Trigger: TriggerData,
			Vehicle: VehicleData,
			Weapon: WeaponData,
			WebUI: WebUIData,
			Widget: WidgetData,
		},
		Struct: {
			Color: ColorData,
			Matrix: MatrixData,
			Quat: QuatData,
			Rotator: RotatorData,
			Vector: VectorData,
			Vector2D: Vector2DData,
		},
		StaticClass: {
			Assets: AssetsData,
			Chat: ChatData,
			Client: ClientData,
			Console: ConsoleData,
			Debug: DebugData,
			Discord: DiscordData,
			Events: EventsData,
			HTTP: HTTPData,
			Input: InputData,
			Level: LevelData,
			Navigation: NavigationData,
			Package: PackageData,
			PostProcess: PostProcessData,
			Server: ServerData,
			Sky: SkyData,
			Steam: SteamData,
			Timer: TimerData,
			Trace: TraceData,
			Viewport: ViewportData,
		},
		UtilityClass: {
			JSON: JSONData,
			NanosMath: NanosMathData,
			NanosUtils: NanosUtilsData,
		},
		StandardLibrary: {
			string: StringData,
			math: MathData,
			table: TableData,
		}
	}
};

// Finds relations automatically
function FindsGetSetRelationsAutomatically(functions, table) {
	// TODO: This algorithm is O(n²) BOOM
	// Which doesn't matter as the page build is static, I guess
	for (const functionKey in functions) {
		let _function = functions[functionKey];

		const isGetter = _function.name.startsWith("Get")
		const isSetter = _function.name.startsWith("Set");

		if (isSetter || isGetter) {
			const otherName = _function.name.replace(isGetter ? 'G' : 'S', isGetter ? 'S' : 'G');

			for (const functionKey2 in functions) {
				let _function2 = functions[functionKey2];

				if (_function2.name == otherName) {
					if (!_function.relations)
						_function.relations = {};

					if (!_function.relations[table])
						_function.relations[table] = [];

					if (!_function.relations[table].includes(otherName))
						_function.relations[table].push(otherName);
				}
			}
		}
	}
}

// Sort and Process a Class
function ProcessClass(_class) {
	if (_class.functions) {
		_class.functions.sort((a, b) => { return a.name > b.name; });
		FindsGetSetRelationsAutomatically(_class.functions, "functions");
	}

	if (_class.static_functions) {
		_class.static_functions.sort((a, b) => { return a.name > b.name; });
		FindsGetSetRelationsAutomatically(_class.static_functions, "static_functions");
	}

	if (_class.events)
		_class.events.sort((a, b) => { return a.name > b.name; });
}

function SortClasses() {
	if (!ExecutionEnvironment.canUseDOM)
		return;

	// Process all Classes
	for (const versionKey in APIData) {
		// Class
		for (const classKey in APIData[versionKey].Class) {
			ProcessClass(APIData[versionKey].Class[classKey]);
		}

		// Static Class
		for (const staticClassKey in APIData[versionKey].StaticClass) {
			ProcessClass(APIData[versionKey].StaticClass[staticClassKey]);
		}
	}
}

SortClasses();

export default APIData;