namespace EventNetwork {
  export interface Response {
    statusCode: number;
    data: Event;
  }

  export interface Event {
    id: string;
    sender: string;
    role: string;
    eventName: string;
    players: Player[];
    points: number[];
    maxPlayers: number;
    room: string;
    message: string;
  }

  interface Player {
    id: string;
    name: string;
    role: string;
    vote?: number;
  }
}

export default EventNetwork;
