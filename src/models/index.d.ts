import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PeopleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class People {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly specialism?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<People, PeopleMetaData>);
  static copyOf(source: People, mutator: (draft: MutableModel<People, PeopleMetaData>) => MutableModel<People, PeopleMetaData> | void): People;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}