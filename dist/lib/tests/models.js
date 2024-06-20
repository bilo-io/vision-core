"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const now = new Date().toISOString();
const user = {
    id: 'bilo.lwabona@gmail.com',
    name: 'Bilo Lwabona',
    image: '',
    authMethod: 'Google',
    dateCreated: now,
    dateUpdated: now,
};
const workspace = {
    id: 'user@email_workspace_name',
    name: 'Custom Workspace',
    users: [
    // {
    //     name: 'Bilo Lwabona',
    //     email: 'bilo.lwabona@gmail.com',
    //     image: '',
    // }
    ],
};
const project = {
    id: 'project_001',
    ref: 'ref_abc123',
    name: 'Epic Adventure',
    templateId: 'tmpl_456',
    dateCreated: now,
    dateUpdated: now,
    audio: {
        theme: 'epic_theme.mp3',
        action: 'action_music.mp3',
        epic: 'boss_battle.mp3',
        explore: 'exploration_music.mp3',
        idle: 'safe_zone.mp3',
        tactical: 'planning_phase.mp3',
    },
    images: {
        coverImage: 'cover.jpg',
        thumbImage: 'thumbnail.jpg',
        titleImage: 'title.jpg',
        slides: ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'],
        thumbAlign: 'center center',
    },
    features: ['Single Player', 'Multiplayer', 'Achievements', 'Leaderboards'],
    executiveSummary: 'Epic Adventure is an action-packed RPG that takes players on a journey through a mythical world filled with danger and intrigue. Players will explore vast landscapes, engage in thrilling battles, and uncover the secrets of a long-lost civilization.',
    contentRating: {
        age: 18,
        hasNudity: false,
        hasSex: false,
        hasViolence: true,
        hasLanguage: true,
        isRRated: true,
        hasDrugUse: false,
        hasAlcoholUse: true,
        hasGambling: false,
        hasScaryElements: true,
        hasOnlineInteractions: true
    },
    targetPlatforms: ['playstation', 'xbox', 'windows', 'ios'],
    technologies: ['unrealengine', 'unity']
};
const controls = {
    id: 'ctrl_001',
    projectId: 'project_123',
    galleryId: 'gallery_456',
    name: 'Default Game Controls',
    dateCreated: now,
    dateUpdated: now,
    data: {
        STICK_LEFT: 'Move character',
        STICK_RIGHT: 'Camera control',
        STICK_LEFT_PRESS: {
            name: 'Sprint',
            description: 'Press the left stick to make the character sprint'
        },
        STICK_RIGHT_PRESS: {
            name: 'Crouch',
            description: 'Press the right stick to make the character crouch'
        },
        DPAD_UP: {
            name: 'Open map',
            description: 'Press up on the D-pad to open the map'
        },
        DPAD_RIGHT: {
            name: 'Cycle right',
            description: 'Press right on the D-pad to cycle through items'
        },
        DPAD_DOWN: {
            name: 'Use item',
            description: 'Press down on the D-pad to use the selected item'
        },
        DPAD_LEFT: {
            name: 'Cycle left',
            description: 'Press left on the D-pad to cycle through items'
        },
        BTN_FACE_UP: {
            name: 'Jump',
            description: 'Press the top face button to jump'
        },
        BTN_FACE_RIGHT: {
            name: 'Attack',
            description: 'Press the right face button to attack'
        },
        BTN_FACE_DOWN: {
            name: 'Defend',
            description: 'Press the bottom face button to defend'
        },
        BTN_FACE_LEFT: {
            name: 'Interact',
            description: 'Press the left face button to interact with objects'
        },
        TRIGGER_LEFT: {
            name: 'Aim',
            description: 'Hold the left trigger to aim'
        },
        SHOULDER_LEFT: {
            name: 'Throw grenade',
            description: 'Press the left shoulder button to throw a grenade'
        },
        TRIGGER_RIGHT: {
            name: 'Shoot',
            description: 'Press the right trigger to shoot'
        },
        SHOULDER_RIGHT: {
            name: 'Reload',
            description: 'Press the right shoulder button to reload your weapon'
        }
    }
};
const character = {
    id: 'char_001',
    projectId: 'project_123',
    galleryId: 'gallery_456',
    dateCreated: now,
    dateUpdated: now,
    demographics: {
        sexuality: 'HETEROSEXUAL',
        age: 21,
        gender: 'MALE'
    },
    name: 'The Shadow',
    names: {
        firstName: 'John',
        lastName: 'Doe',
        nickName: 'JD'
    },
    traits: {
        personality: ['Confident', 'Adventurous', 'Loyal'],
        skills: ['Problem Solving', 'Leadership', 'Foreign Languages'],
        specialAbilities: ['Invisibility', 'Telekinesis']
    },
    identity: {
        ethnicity: 'Caucasian',
        religion: 'None',
        genderIdentity: 'Male',
        sexualOrientation: 'Heterosexual',
        pronouns: 'He/Him'
    },
    background: {
        nationality: 'American',
        language: 'English, Spanish',
        education: 'Masters in Computer Science',
        occupation: 'Software Engineer'
    },
    images: ['image1.jpg', 'image2.jpg'],
    story: 'Once a brilliant software engineer, John Doe discovered a way to harness the power of invisibility and telekinesis...'
};
const location = {
    id: 'loc_001',
    projectId: 'project_123',
    galleryId: 'gallery_456',
    name: 'Mystic Forest',
    dateCreated: now,
    dateUpdated: now,
    description: 'A dense, enchanted forest where magic and danger lurk behind every tree.',
    lore: 'The Mystic Forest has been a place of legend for centuries. Many believe it to be the home of ancient spirits and mythical creatures.',
    plot: 'The protagonist must navigate through the Mystic Forest to find the lost relic, encountering various challenges and allies along the way.',
    images: ['forest1.jpg', 'forest2.jpg', 'forest3.jpg'],
    blocks: [
        {
            type: 'header',
            data: {
                text: 'Mystic Forest',
                level: 2
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'The Mystic Forest is a vital location in our story. It is known for its lush greenery and the eerie glow that emanates from its core.'
            }
        },
        {
            type: 'image',
            data: {
                file: {
                    url: 'forest_overview.jpg'
                },
                withBorder: true,
                withBackground: false,
                stretched: true,
                caption: 'An overview of the Mystic Forest'
            }
        },
        {
            type: 'list',
            data: {
                type: 'unordered',
                items: [
                    'Dense foliage',
                    'Enchanted creatures',
                    {
                        type: 'list',
                        data: {
                            type: 'ordered',
                            items: [
                                'Elves',
                                'Fairies',
                                'Goblins'
                            ]
                        }
                    },
                    'Hidden paths',
                    'Mystical artifacts'
                ]
            }
        },
        {
            type: 'attaches',
            data: {
                file: {
                    url: 'map.pdf',
                    size: 2048,
                    name: 'MysticForestMap',
                    extension: 'pdf'
                },
                title: 'Map of the Mystic Forest'
            }
        }
    ]
};
const dialogue = {
    id: 'dlg_001',
    projectId: 'project_123',
    galleryId: 'gallery_456',
    dateCreated: now,
    dateUpdated: now,
    name: 'Opening Scene',
    type: 'Dialogue',
    actors: [
        {
            id: 'actor_001',
            name: 'Alice',
            image: 'alice.png',
            voice: 'alice_voice.mp3'
        },
        {
            id: 'actor_002',
            name: 'Bob',
            image: 'bob.png'
        }
    ],
    data: [
        {
            text: 'Welcome to the world of Mystica!',
            delay: 500,
            actorId: 'actor_001',
            tone: 'EXCITED',
            emotion: 'JOY',
            intent: 'EXCLAMATION',
            gesture: 'SMILE',
            language: 'English',
            subtext: 'A magical adventure awaits',
            context: 'Introduction to the game world',
            action: 'waves hand'
        },
        {
            text: 'We hope you enjoy your journey.',
            delay: 1000,
            actorId: 'actor_002',
            tone: 'CALM',
            emotion: 'ANTICIPATION',
            intent: 'STATEMENT',
            gesture: 'NOD',
            language: 'English',
            subtext: 'Encouraging the player',
            context: 'Further welcoming the player',
            action: 'smiles'
        }
    ]
};
const graph = {
    id: 'graph_001',
    projectId: 'project_123',
    galleryId: 'gallery_456',
    dateCreated: now,
    dateUpdated: now,
    name: 'Character Relationships',
    data: {
        edges: [
            {
                id: 'edge_001',
                label: 'Friendship',
                source: 'node_001',
                target: 'node_002'
            },
            {
                id: 'edge_002',
                label: 'Rivalry',
                source: 'node_002',
                target: 'node_003'
            },
            {
                id: 'edge_003',
                label: 'Mentorship',
                source: 'node_001',
                target: 'node_003'
            }
        ],
        nodes: [
            {
                id: 'node_001',
                width: 100,
                height: 50,
                type: 'character',
                data: {
                    label: 'Alice',
                    id: 'char_001'
                },
                position: {
                    x: 100,
                    y: 100
                }
            },
            {
                id: 'node_002',
                width: 100,
                height: 50,
                type: 'character',
                data: {
                    label: 'Bob',
                    id: 'char_002'
                },
                position: {
                    x: 300,
                    y: 100
                }
            },
            {
                id: 'node_003',
                width: 100,
                height: 50,
                type: 'character',
                data: {
                    label: 'Eve',
                    id: 'char_003'
                },
                position: {
                    x: 200,
                    y: 300
                }
            }
        ]
    }
};
const document = {
    id: 'doc_001',
    projectId: 'project_123',
    galleryId: 'gallery_456',
    name: 'Project Overview',
    dateCreated: now,
    dateUpdated: now,
    blocks: [
        {
            type: 'header',
            data: {
                text: 'Introduction',
                level: 1
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'This document provides an overview of the project, including objectives, timeline, and key stakeholders.'
            }
        },
        {
            type: 'list',
            data: {
                type: 'unordered',
                items: [
                    'Objective 1: Define project scope',
                    'Objective 2: Identify key milestones',
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Objective 3: Establish communication plan'
                        }
                    }
                ]
            }
        },
        {
            type: 'image',
            data: {
                file: {
                    url: 'project_overview.png'
                },
                withBorder: true,
                withBackground: false,
                stretched: false,
                caption: 'Project overview diagram'
            }
        },
        {
            type: 'attaches',
            data: {
                file: {
                    url: 'project_plan.pdf',
                    size: 2048,
                    name: 'Project Plan',
                    extension: 'pdf'
                },
                title: 'Download the full project plan'
            }
        }
    ],
    sectionCount: 5,
    templateId: 'template_01',
    collectionId: 'collection_01',
    userPrompt: 'Provide a high-level summary of the project objectives and timeline.'
};
const subscription = {
    name: 'Free',
    id: 'free',
    type: 'FREE',
    period: 'MONTHLY',
    limits: {
        WORKSPACES: 0,
        PROJECTS: 0,
        COLLABORATORS: 0,
        CHARACTERS: 0,
        DIALOGUES: 0,
        DOCUMENTS: 0,
        LOCATIONS: 0,
        CONTROLS: 0,
        GRAPHS: 0,
        AI_TEXT_GENERATION: 0,
        AI_IMAGE_GENERATION: 0,
        AI_AUDIO_GENERATION: 0,
        AI_VIDEO_GENERATION: 0,
        AI_3D_MODEL_GENERATION: 0
    }
};
const subscriptionRate = {
    WORKSPACES: 1,
    PROJECTS: 1,
    COLLABORATORS: 0.5,
    CHARACTERS: 0.1,
    DIALOGUES: 0.1,
    DOCUMENTS: 0.2,
    LOCATIONS: 0.1,
    CONTROLS: 0.2,
    GRAPHS: 0.5,
    AI_TEXT_GENERATION: 0.2,
    AI_IMAGE_GENERATION: 0.5,
    AI_AUDIO_GENERATION: 1,
    AI_VIDEO_GENERATION: 2,
    AI_3D_MODEL_GENERATION: 3
};
