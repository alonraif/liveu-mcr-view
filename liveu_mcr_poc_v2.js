const STORAGE_KEYS = {
    inventories: 'liveu-mcr-inventories',
    scriptEvents: 'liveu-mcr-script-events',
    lastInventory: 'liveu-mcr-last-inventory'
};

// Default persistent state
const DEFAULT_INVENTORIES = {
    'broadcast-center': {
        name: 'Broadcast Center',
        equipment: [
            {
                id: 'bc-lu800pro-001',
                name: 'Studio-Cam-A',
                product: 'LU800-Pro',
                mode: '1080p50',
                uptime: '4h 12m',
                status: 'streaming',
                x: 100,
                y: 150,
                type: 'unit',
                channel: 'Channel-1',
                encoders: [
                    { id: 1, status: 'streaming', channel: 'Channel-1' },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 3800, max: 10000 },
                alerts: [],
                onAir: true,
                story: {
                    slugline: 'Evening News Desk',
                    crew: 'Anchor Camera A',
                    id: 'story-news-001'
                },
                battery: {
                    percentage: 100,
                    remainingMinutes: 0,
                    charging: true
                },
                delay: 1200,
                videoReturn: true,
                location: 'Studio A - Camera Left',
                links: [
                    { name: 'Studio Ethernet', signal: 5, bandwidth: 10000, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'bc-lu800pro-002',
                name: 'Studio-Cam-B',
                product: 'LU800-Pro',
                mode: '1080p50',
                uptime: '4h 10m',
                status: 'online',
                x: 100,
                y: 300,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 10000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 100,
                    remainingMinutes: 0,
                    charging: true
                },
                delay: 1200,
                videoReturn: true,
                location: 'Studio A - Camera Right',
                links: [
                    { name: 'Studio Ethernet', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'bc-lu800pro-003',
                name: 'Studio-Cam-C',
                product: 'LU800-Pro',
                mode: '4K25',
                uptime: '3h 58m',
                status: 'online',
                x: 100,
                y: 450,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 10000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 100,
                    remainingMinutes: 0,
                    charging: true
                },
                delay: 1200,
                videoReturn: true,
                location: 'Studio A - Wide Shot',
                links: [
                    { name: 'Studio Ethernet', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'bc-lu600-001',
                name: 'Mobile-Reporter-1',
                product: 'LU600',
                mode: '1080i50',
                uptime: '2h 15m',
                status: 'online',
                x: 100,
                y: 600,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 5000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 78,
                    remainingMinutes: 145,
                    charging: false
                },
                delay: 2800,
                videoReturn: false,
                location: 'News Van - Garage',
                links: [
                    { name: 'AT&T 5G', signal: 5, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'Verizon LTE', signal: 4, bandwidth: 0, technology: 'LTE', connected: false }
                ]
            },
            {
                id: 'bc-lu2000-001',
                name: 'Broadcast-Server-Main',
                product: 'LU2000',
                status: 'online',
                x: 500,
                y: 250,
                type: 'server',
                channels: [
                    { id: 'Channel-1', status: 'streaming', connectedUnit: 'bc-lu800pro-001', recording: 'bc-ingest-001' },
                    { id: 'Channel-2', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-3', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-4', status: 'idle', connectedUnit: null, recording: null }
                ],
                ingestAssociation: 'bc-ingest-001'
            },
            {
                id: 'bc-lu4000-001',
                name: 'Broadcast-Server-Backup',
                product: 'LU4000',
                status: 'online',
                x: 500,
                y: 450,
                type: 'server',
                channels: [
                    { id: 'Channel-1', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-2', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-3', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-4', status: 'idle', connectedUnit: null, recording: null }
                ],
                ingestAssociation: null
            },
            {
                id: 'bc-ingest-001',
                name: 'Recording-Server-Primary',
                product: 'Ingest',
                status: 'online',
                x: 850,
                y: 200,
                type: 'ingest',
                associatedChannels: ['bc-lu2000-001:Channel-1'],
                diskSpace: { used: 3200, total: 10000 },
                activeRecordings: ['Channel-1']
            },
            {
                id: 'bc-ingest-002',
                name: 'Recording-Server-Archive',
                product: 'Ingest',
                status: 'online',
                x: 850,
                y: 380,
                type: 'ingest',
                associatedChannels: [],
                diskSpace: { used: 7800, total: 20000 },
                activeRecordings: []
            },
            {
                id: 'bc-srt-001',
                name: 'SRT-Input-Studio',
                product: 'SRT-In',
                status: 'online',
                x: 300,
                y: 100,
                type: 'srt-in',
                channel: { status: 'idle', source: null, outputChannel: null },
                acceptedFormats: ['SRT', 'RTMP']
            },
            {
                id: 'bc-transceiver-001',
                name: 'Studio-Transceiver',
                product: 'Transceiver',
                status: 'online',
                x: 300,
                y: 600,
                type: 'transceiver',
                config: { encoders: 2, decoders: 2 },
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null }
                ],
                decoders: [
                    { id: 1, status: 'idle', connectedUnit: null },
                    { id: 2, status: 'idle', connectedUnit: null }
                ]
            },
            {
                id: 'bc-sdi-001',
                name: 'SDI-Output-Master',
                product: 'SDI',
                status: 'online',
                x: 850,
                y: 550,
                type: 'destination',
                hardware: 'DeckLink 8K Pro',
                supportsEncoderInput: true,
                connectedChannel: 'Channel-1'
            },
            {
                id: 'bc-ndi-001',
                name: 'NDI-Output-Production',
                product: 'NDI',
                status: 'online',
                x: 1050,
                y: 200,
                type: 'destination',
                streamName: 'Studio-A-Program',
                connectedChannel: null
            },
            {
                id: 'bc-srt-out-001',
                name: 'SRT-Output-CDN',
                product: 'SRT',
                status: 'online',
                x: 1050,
                y: 380,
                type: 'destination',
                mode: 'caller',
                connectedChannel: null
            }
        ]
    },
    'field-ops': {
        name: 'Field Operations',
        equipment: [
            {
                id: 'fo-lu800pro-001',
                name: 'Helicopter-Cam',
                product: 'LU800-Pro',
                mode: '1080p50',
                uptime: '0h 45m',
                status: 'online',
                x: 100,
                y: 100,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 10000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 92,
                    remainingMinutes: 155,
                    charging: false
                },
                delay: 3200,
                videoReturn: true,
                location: 'Airborne - 1500ft AGL',
                links: [
                    { name: 'AT&T 5G', signal: 3, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'Verizon 5G', signal: 4, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'Satellite', signal: 5, bandwidth: 0, technology: 'SAT', connected: false }
                ]
            },
            {
                id: 'fo-lu600-001',
                name: 'Reporter-Downtown',
                product: 'LU600',
                mode: '1080i50',
                uptime: '2h 45m',
                status: 'streaming',
                x: 100,
                y: 280,
                type: 'unit',
                channel: 'Channel-1',
                encoders: [
                    { id: 1, status: 'streaming', channel: 'Channel-1' }
                ],
                bandwidth: { current: 4500, max: 5000 },
                alerts: [],
                onAir: true,
                story: {
                    slugline: 'Breaking: City Hall Protest',
                    crew: 'Sarah Martinez',
                    id: 'story-12345'
                },
                battery: {
                    percentage: 42,
                    remainingMinutes: 86,
                    charging: false
                },
                delay: 2500,
                videoReturn: true,
                location: 'City Hall Plaza',
                links: [
                    { name: 'AT&T 5G', signal: 4, bandwidth: 2500, technology: '5G', connected: true },
                    { name: 'Verizon LTE', signal: 5, bandwidth: 3100, technology: 'LTE', connected: true },
                    { name: 'WiFi Hotspot', signal: 3, bandwidth: 800, connected: false, type: 'wifi' }
                ]
            },
            {
                id: 'fo-lu600-002',
                name: 'Reporter-Midtown',
                product: 'LU600',
                mode: '1080i50',
                uptime: '1h 15m',
                status: 'online',
                x: 100,
                y: 430,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 5000 },
                alerts: [],
                onAir: false,
                story: {
                    slugline: 'Traffic Update - 5th Avenue',
                    crew: 'Mike Johnson',
                    id: 'story-67890'
                },
                battery: {
                    percentage: 68,
                    remainingMinutes: 128,
                    charging: false
                },
                delay: 2400,
                videoReturn: false,
                location: 'Times Square',
                links: [
                    { name: 'T-Mobile 5G', signal: 5, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'Verizon LTE', signal: 4, bandwidth: 0, technology: 'LTE', connected: false }
                ]
            },
            {
                id: 'fo-lu610-001',
                name: 'Sports-Sideline',
                product: 'LU610',
                mode: '1080p25',
                uptime: '3h 20m',
                status: 'online',
                x: 100,
                y: 580,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 6000 },
                alerts: [],
                onAir: false,
                story: {
                    slugline: 'Game Day - Yankees vs Red Sox',
                    crew: 'Sports Team Alpha',
                    id: 'story-sports-001'
                },
                battery: {
                    percentage: 85,
                    remainingMinutes: 210,
                    charging: false
                },
                delay: 1800,
                videoReturn: true,
                location: 'Yankee Stadium - Field Level',
                links: [
                    { name: 'Stadium 5G', signal: 5, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'Stadium WiFi', signal: 5, bandwidth: 0, connected: false, type: 'wifi' }
                ]
            },
            {
                id: 'fo-lu610-002',
                name: 'Van-Backup-Unit',
                product: 'LU610',
                mode: '1080p50',
                uptime: '0h 05m',
                status: 'online',
                x: 100,
                y: 730,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 6000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 100,
                    remainingMinutes: 240,
                    charging: true
                },
                delay: 2500,
                videoReturn: false,
                location: 'Mobile Unit 3 - Standby',
                links: [
                    { name: 'Van Router', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'fo-lu4000-001',
                name: 'Field-Operations-HQ',
                product: 'LU4000',
                status: 'online',
                x: 550,
                y: 300,
                type: 'server',
                channels: [
                    { id: 'Channel-1', status: 'streaming', connectedUnit: 'fo-lu600-001', recording: 'fo-ingest-001' },
                    { id: 'Channel-2', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-3', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-4', status: 'idle', connectedUnit: null, recording: null }
                ],
                ingestAssociation: 'fo-ingest-001'
            },
            {
                id: 'fo-lu2000-001',
                name: 'Sports-Server',
                product: 'LU2000',
                status: 'online',
                x: 550,
                y: 550,
                type: 'server',
                channels: [
                    { id: 'Channel-1', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-2', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-3', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Channel-4', status: 'idle', connectedUnit: null, recording: null }
                ],
                ingestAssociation: null
            },
            {
                id: 'fo-ingest-001',
                name: 'Field-Recordings-Main',
                product: 'Ingest',
                status: 'online',
                x: 900,
                y: 200,
                type: 'ingest',
                associatedChannels: ['fo-lu4000-001:Channel-1'],
                diskSpace: { used: 1250, total: 8000 },
                activeRecordings: ['Channel-1']
            },
            {
                id: 'fo-ingest-002',
                name: 'Field-Recordings-Sports',
                product: 'Ingest',
                status: 'online',
                x: 900,
                y: 450,
                type: 'ingest',
                associatedChannels: [],
                diskSpace: { used: 4200, total: 10000 },
                activeRecordings: []
            },
            {
                id: 'fo-transceiver-001',
                name: 'Mobile-Transceiver-1',
                product: 'Transceiver',
                status: 'online',
                x: 350,
                y: 150,
                type: 'transceiver',
                config: { encoders: 2, decoders: 2 },
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null }
                ],
                decoders: [
                    { id: 1, status: 'idle', connectedUnit: null },
                    { id: 2, status: 'idle', connectedUnit: null }
                ]
            },
            {
                id: 'fo-srt-001',
                name: 'Field-SRT-Input',
                product: 'SRT-In',
                status: 'online',
                x: 350,
                y: 650,
                type: 'srt-in',
                channel: { status: 'idle', source: null, outputChannel: null },
                acceptedFormats: ['SRT', 'RTMP']
            },
            {
                id: 'fo-sdi-001',
                name: 'Truck-SDI-Output',
                product: 'SDI',
                status: 'online',
                x: 900,
                y: 650,
                type: 'destination',
                hardware: 'DeckLink Quad 2',
                supportsEncoderInput: true,
                connectedChannel: null
            }
        ]
    },
    'studio-production': {
        name: 'Studio Production',
        equipment: [
            {
                id: 'st-lu800pro-001',
                name: 'Studio-A-Cam-1',
                product: 'LU800-Pro',
                mode: '4K25',
                uptime: '8h 42m',
                status: 'online',
                x: 100,
                y: 150,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 10000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 100,
                    remainingMinutes: 0,
                    charging: true
                },
                delay: 800,
                videoReturn: true,
                location: 'Studio A - Position 1',
                links: [
                    { name: 'Fiber Optic', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'st-lu800pro-002',
                name: 'Studio-A-Cam-2',
                product: 'LU800-Pro',
                mode: '4K25',
                uptime: '8h 40m',
                status: 'online',
                x: 100,
                y: 300,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 10000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 100,
                    remainingMinutes: 0,
                    charging: true
                },
                delay: 800,
                videoReturn: true,
                location: 'Studio A - Position 2',
                links: [
                    { name: 'Fiber Optic', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'st-lu800pro-003',
                name: 'Studio-A-Cam-3',
                product: 'LU800-Pro',
                mode: '4K25',
                uptime: '8h 38m',
                status: 'online',
                x: 100,
                y: 450,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null },
                    { id: 2, status: 'idle', channel: null },
                    { id: 3, status: 'idle', channel: null },
                    { id: 4, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 10000 },
                alerts: [],
                onAir: false,
                battery: {
                    percentage: 100,
                    remainingMinutes: 0,
                    charging: true
                },
                delay: 800,
                videoReturn: true,
                location: 'Studio A - Wide Shot',
                links: [
                    { name: 'Fiber Optic', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'st-lu600-001',
                name: 'Interview-Portable',
                product: 'LU600',
                mode: '1080p50',
                uptime: '1h 25m',
                status: 'online',
                x: 100,
                y: 600,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 5000 },
                alerts: [],
                onAir: false,
                story: {
                    slugline: 'Guest Interview Setup',
                    crew: 'Production Team B',
                    id: 'story-interview-001'
                },
                battery: {
                    percentage: 88,
                    remainingMinutes: 175,
                    charging: false
                },
                delay: 1200,
                videoReturn: true,
                location: 'Green Room',
                links: [
                    { name: 'Studio WiFi 6', signal: 5, bandwidth: 0, connected: false, type: 'wifi' },
                    { name: 'Ethernet Dock', signal: 5, bandwidth: 0, connected: true, type: 'ethernet' }
                ]
            },
            {
                id: 'st-lu2000-001',
                name: 'Studio-Server-Main',
                product: 'LU2000',
                status: 'online',
                x: 550,
                y: 300,
                type: 'server',
                channels: [
                    { id: 'Studio-A', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Studio-B', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Studio-C', status: 'idle', connectedUnit: null, recording: null },
                    { id: 'Studio-D', status: 'idle', connectedUnit: null, recording: null }
                ],
                ingestAssociation: 'st-ingest-001'
            },
            {
                id: 'st-ingest-001',
                name: 'Studio-Recording-Primary',
                product: 'Ingest',
                status: 'online',
                x: 900,
                y: 200,
                type: 'ingest',
                associatedChannels: [],
                diskSpace: { used: 5400, total: 15000 },
                activeRecordings: []
            },
            {
                id: 'st-sdi-output-001',
                name: 'Master-Control-SDI',
                product: 'SDI',
                status: 'online',
                x: 900,
                y: 400,
                type: 'destination',
                hardware: 'DeckLink 8K Pro',
                supportsEncoderInput: true,
                connectedChannel: null
            },
            {
                id: 'st-ndi-output-001',
                name: 'Studio-NDI-Main',
                product: 'NDI',
                status: 'online',
                x: 900,
                y: 550,
                type: 'destination',
                streamName: 'Studio-A-Program-Feed',
                connectedChannel: null
            },
            {
                id: 'st-srt-out-001',
                name: 'Web-Stream-SRT',
                product: 'SRT',
                status: 'online',
                x: 1100,
                y: 300,
                type: 'destination',
                mode: 'caller',
                connectedChannel: null
            },
            {
                id: 'st-rtmp-001',
                name: 'Social-Media-Stream',
                product: 'RTMP',
                status: 'online',
                x: 1100,
                y: 450,
                type: 'destination',
                connectedChannel: null
            }
        ]
    },
    'cloud-setup': {
        name: 'Cloud Production',
        equipment: [
            {
                id: 'cl-lu800hdr-001',
                name: 'Remote-Cinematographer',
                product: 'LU800-HDR',
                mode: '1080p50-HDR',
                uptime: '6h 15m',
                status: 'streaming',
                x: 100,
                y: 150,
                type: 'unit',
                channel: 'Cloud-Channel-1',
                encoders: [
                    { id: 1, status: 'streaming', channel: 'Cloud-Channel-1' }
                ],
                bandwidth: { current: 4500, max: 8000 },
                alerts: [],
                onAir: true,
                story: {
                    slugline: 'Documentary - Amazon Rainforest',
                    crew: 'Remote Production Team',
                    id: 'story-doc-001'
                },
                battery: {
                    percentage: 54,
                    remainingMinutes: 98,
                    charging: false
                },
                delay: 4200,
                videoReturn: false,
                location: 'Amazon Basin, Brazil',
                links: [
                    { name: 'Starlink', signal: 4, bandwidth: 2800, technology: 'SAT', connected: true },
                    { name: 'Local 4G', signal: 2, bandwidth: 800, technology: 'LTE', connected: true }
                ]
            },
            {
                id: 'cl-lu600-001',
                name: 'Correspondent-London',
                product: 'LU600',
                mode: '1080p50',
                uptime: '3h 10m',
                status: 'online',
                x: 100,
                y: 350,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 5000 },
                alerts: [],
                onAir: false,
                story: {
                    slugline: 'International Bureau - UK Politics',
                    crew: 'London Bureau',
                    id: 'story-intl-002'
                },
                battery: {
                    percentage: 72,
                    remainingMinutes: 142,
                    charging: false
                },
                delay: 3800,
                videoReturn: false,
                location: 'Westminster, London, UK',
                links: [
                    { name: 'Vodafone 5G', signal: 5, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'EE 5G', signal: 4, bandwidth: 0, technology: '5G', connected: false }
                ]
            },
            {
                id: 'cl-lu610-001',
                name: 'Correspondent-Tokyo',
                product: 'LU610',
                mode: '1080p50',
                uptime: '5h 30m',
                status: 'online',
                x: 100,
                y: 520,
                type: 'unit',
                encoders: [
                    { id: 1, status: 'idle', channel: null }
                ],
                bandwidth: { current: 0, max: 6000 },
                alerts: [],
                onAir: false,
                story: {
                    slugline: 'Asia Bureau - Tech Conference',
                    crew: 'Tokyo Bureau',
                    id: 'story-asia-003'
                },
                battery: {
                    percentage: 45,
                    remainingMinutes: 88,
                    charging: false
                },
                delay: 5100,
                videoReturn: false,
                location: 'Shibuya, Tokyo, Japan',
                links: [
                    { name: 'NTT Docomo 5G', signal: 5, bandwidth: 0, technology: '5G', connected: false },
                    { name: 'SoftBank 5G', signal: 4, bandwidth: 0, technology: '5G', connected: false }
                ]
            },
            {
                id: 'cl-cloudmmh-001',
                name: 'Cloud-MMH-Primary',
                product: 'Cloud-MMH',
                status: 'online',
                x: 600,
                y: 300,
                type: 'server',
                channels: [
                    { id: 'Cloud-Channel-1', status: 'streaming', connectedUnit: 'cl-lu800hdr-001', recording: 'cl-ingest-001' }
                ],
                ingestAssociation: 'cl-ingest-001'
            },
            {
                id: 'cl-ingest-001',
                name: 'Cloud-Storage',
                product: 'Ingest',
                status: 'online',
                x: 950,
                y: 200,
                type: 'ingest',
                associatedChannels: ['cl-cloudmmh-001:Cloud-Channel-1'],
                diskSpace: { used: 850, total: 5000 },
                activeRecordings: ['Cloud-Channel-1']
            },
            {
                id: 'cl-sdi-001',
                name: 'Cloud-to-Broadcast-SDI',
                product: 'SDI',
                status: 'online',
                x: 950,
                y: 400,
                type: 'destination',
                hardware: 'DeckLink 4K Extreme 12G',
                supportsEncoderInput: true,
                connectedChannel: 'Cloud-Channel-1'
            },
            {
                id: 'cl-ndi-001',
                name: 'Cloud-NDI-Feed',
                product: 'NDI',
                status: 'online',
                x: 950,
                y: 550,
                type: 'destination',
                streamName: 'LiveU-Cloud-Production',
                connectedChannel: null
            },
            {
                id: 'cl-srt-001',
                name: 'Cloud-SRT-Distribution',
                product: 'SRT',
                status: 'online',
                x: 1150,
                y: 300,
                type: 'destination',
                mode: 'caller',
                connectedChannel: null
            },
            {
                id: 'cl-rtmp-001',
                name: 'Cloud-RTMP-Backup',
                product: 'RTMP',
                status: 'online',
                x: 1150,
                y: 450,
                type: 'destination',
                connectedChannel: null
            }
        ]
    }
};

const DEFAULT_SCRIPT_EVENTS = [];

let scriptEventIdCounter = Date.now();
const ZOOM_CONFIG = { min: 0.35, max: 2.5, step: 0.15 };
let mcrTransform = { scale: 1, translateX: 0, translateY: 0 };
let userAdjustedZoom = false;
let isPanningCanvas = false;
let panStart = { x: 0, y: 0 };
let panStartTransform = { translateX: 0, translateY: 0 };
let isCanvasFullscreen = false;
let clockInterval = null;

const STORAGE_AVAILABLE = supportsLocalStorage();

let inventories = loadInventories();
enforceChannelStreamingConsistency();

// LiveU Entity Definitions
const ENTITY_TYPES = {
    units: {
        'LU800-Pro': { name: 'LU800-Pro', encoders: 4, canStream: true, protocol: 'LRT' },
        'LU800-HDR': { name: 'LU800-HDR', encoders: 1, canStream: true, protocol: 'LRT' },
        'LU600': { name: 'LU600', encoders: 1, canStream: true, protocol: 'LRT' },
        'LU610': { name: 'LU610', encoders: 1, canStream: true, protocol: 'LRT' }
    },
    servers: {
        'LU2000': { name: 'LU2000', channels: 4, type: 'mmh' },
        'LU4000': { name: 'LU4000', channels: 4, type: 'mmh' },
        'Ingest': { name: 'Ingest Server', channels: 0, type: 'ingest', canRecord: true },
        'SRT-In': { name: 'SRT-In', channels: 1, type: 'srt-in', accepts: ['SRT', 'RTMP'], outputs: 'LRT' },
        'Cloud-MMH': { name: 'Cloud MMH', channels: 1, type: 'cloud-mmh' }
    },
    transceivers: {
        'Transceiver': { name: 'Transceiver', totalChannels: 4, configurable: true }
    },
    destinations: {
        'SDI': { name: 'SDI Output', type: 'sdi', hardware: 'DeckLink 4K Extreme 12G', acceptsEncoders: true },
        'NDI': { name: 'NDI Output', type: 'ndi' },
        'SRT': { name: 'SRT Stream', type: 'srt', modes: ['listener', 'caller'] },
        'RTMP': { name: 'RTMP Stream', type: 'rtmp' },
        'RTSP': { name: 'RTSP Stream', type: 'rtsp' }
    }
};

// Alert Types
const ALERT_TYPES = {
    'low-bandwidth': { icon: '⚠️', color: '#ff9500', message: 'Low bandwidth detected' },
    'ingest-offline': { icon: '🔴', color: '#ff4444', message: 'Ingest server is offline' },
    'channel-orphaned': { icon: '⚠️', color: '#ff6600', message: 'Channel associated to offline ingest server' },
    'connection-lost': { icon: '🔌', color: '#ff4444', message: 'Connection lost' },
    'stream-started': { icon: '🟢', color: '#00ff00', message: 'Stream started successfully' },
    'stream-stopped': { icon: '⭕', color: '#ffaa00', message: 'Stream stopped' }
};
let currentInventory = loadLastInventoryKey();
if (currentInventory && !inventories[currentInventory]) {
    currentInventory = '';
}

let scriptEvents = loadScriptEvents();
let scriptRunning = false;
let scriptStartTime = null;
let scriptInterval = null;
let autoRefresh = false;
let showConnections = true;
let draggedElement = null;
let dragOffset = { x: 0, y: 0 };
let connectionRedrawScheduled = false;
let editingEquipment = null;

// Pre-configured demo scripts
const PRESET_SCRIPTS = {
    newsbreak: {
        name: "Breaking News Coverage",
        inventory: "field-ops",
        events: [
            { time: 5, equipment: "fo-lu4000-001", action: "online", description: "Field server comes online" },
            { time: 10, equipment: "fo-lu600-001", action: "online", description: "Field reporter unit ready" },
            { time: 15, equipment: "fo-lu600-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-1", description: "🔴 BREAKING: Reporter goes live from scene" },
            { time: 20, equipment: "fo-lu600-001", action: "set-battery", value: 72, description: "Battery draining during live transmission" },
            { time: 35, equipment: "fo-lu600-001", action: "degrade-link", linkIndex: 1, signal: 3, description: "⚠️ Verizon LTE signal degrading" },
            { time: 45, equipment: "fo-lu610-001", action: "online", description: "Backup unit online as precaution" },
            { time: 50, equipment: "fo-lu600-001", action: "set-battery", value: 45, description: "⚠️ Battery at 45% - Low battery warning" },
            { time: 60, equipment: "fo-lu600-001", action: "degrade-link", linkIndex: 1, signal: 2, description: "🔴 Critical: Verizon signal critical" },
            { time: 70, equipment: "fo-lu600-001", action: "restore-link", linkIndex: 1, signal: 5, description: "✅ Signal restored" },
            { time: 90, equipment: "fo-lu600-001", action: "stop-streaming", description: "End of live report" },
            { time: 100, equipment: "fo-lu610-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "Backup unit takes over for follow-up" },
            { time: 120, equipment: "fo-lu610-001", action: "stop-streaming", description: "Coverage complete" }
        ]
    },
    sportscast: {
        name: "Live Sports Event",
        inventory: "field-ops",
        events: [
            { time: 5, equipment: "fo-lu4000-001", action: "online", description: "Stadium server online" },
            { time: 10, equipment: "fo-lu800pro-001", action: "online", description: "Main camera unit ready" },
            { time: 15, equipment: "fo-lu800pro-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-1", description: "🎬 Main camera feed starts" },
            { time: 25, equipment: "fo-lu610-001", action: "online", description: "Handheld camera ready" },
            { time: 30, equipment: "fo-lu610-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "Handheld camera joins broadcast" },
            { time: 45, equipment: "fo-lu800pro-001", action: "degrade-link", linkIndex: 0, signal: 3, description: "⚠️ Crowd interference - AT&T signal drops" },
            { time: 50, equipment: "fo-lu800pro-001", action: "set-battery", value: 68, description: "Battery draining on main camera" },
            { time: 75, equipment: "fo-lu800pro-001", action: "restore-link", linkIndex: 0, signal: 5, description: "✅ AT&T signal restored" },
            { time: 90, equipment: "fo-lu800pro-001", action: "set-battery", value: 35, description: "⚠️ Main camera battery at 35%" },
            { time: 100, equipment: "fo-lu600-001", action: "online", description: "Backup camera online" },
            { time: 120, equipment: "fo-lu800pro-001", action: "stop-streaming", description: "Main camera wraps" },
            { time: 130, equipment: "fo-lu610-001", action: "stop-streaming", description: "All feeds stopped" }
        ]
    },
    interview: {
        name: "Studio Interview",
        inventory: "studio-production",
        events: [
            { time: 5, equipment: "st-lu2000-001", action: "online", description: "Studio server online" },
            { time: 10, equipment: "st-lu800pro-001", action: "online", description: "Camera 1 ready" },
            { time: 15, equipment: "st-lu800pro-002", action: "online", description: "Camera 2 ready" },
            { time: 20, equipment: "st-lu800pro-001", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-A", description: "🎥 Camera 1 streaming" },
            { time: 25, equipment: "st-lu800pro-002", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-B", description: "🎥 Camera 2 streaming" },
            { time: 40, equipment: "st-sdi-output-001", action: "online", description: "SDI output to control room" },
            { time: 60, equipment: "st-lu800pro-001", action: "set-battery", value: 55, description: "Camera 1 battery check" },
            { time: 90, equipment: "st-lu800pro-002", action: "set-battery", value: 48, description: "Camera 2 battery check" },
            { time: 120, equipment: "st-lu800pro-001", action: "stop-streaming", description: "Camera 1 wrap" },
            { time: 125, equipment: "st-lu800pro-002", action: "stop-streaming", description: "Interview complete" }
        ]
    },
    disaster: {
        name: "Emergency Response",
        inventory: "field-ops",
        events: [
            { time: 5, equipment: "fo-lu4000-001", action: "online", description: "Command server online" },
            { time: 10, equipment: "fo-lu600-001", action: "online", description: "Primary unit on scene" },
            { time: 15, equipment: "fo-lu600-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-1", description: "🔴 LIVE from disaster scene" },
            { time: 25, equipment: "fo-lu600-001", action: "degrade-link", linkIndex: 0, signal: 2, description: "🚨 CRITICAL: AT&T tower damaged" },
            { time: 30, equipment: "fo-lu600-001", action: "degrade-link", linkIndex: 1, signal: 3, description: "⚠️ Verizon signal degrading" },
            { time: 35, equipment: "fo-lu600-001", action: "set-battery", value: 38, description: "🔋 Battery draining rapidly" },
            { time: 40, equipment: "fo-lu610-001", action: "online", description: "⚡ Backup unit deploying" },
            { time: 45, equipment: "fo-lu610-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "Backup feed established" },
            { time: 50, equipment: "fo-lu600-001", action: "set-battery", value: 18, description: "🔴 CRITICAL BATTERY - 18% remaining" },
            { time: 55, equipment: "fo-lu600-001", action: "offline", description: "⚠️ Primary unit battery depleted" },
            { time: 60, equipment: "fo-lu610-001", action: "set-battery", value: 85, description: "Backup unit continuing coverage" },
            { time: 90, equipment: "fo-lu800pro-001", action: "online", description: "Additional camera arrives" },
            { time: 100, equipment: "fo-lu800pro-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-3", description: "Multi-angle coverage active" },
            { time: 120, equipment: "fo-lu600-001", action: "online", description: "✅ Primary unit recharged, back online" },
            { time: 150, equipment: "fo-lu610-001", action: "stop-streaming", description: "Backup feed released" },
            { time: 160, equipment: "fo-lu800pro-001", action: "stop-streaming", description: "Additional camera wrap" },
            { time: 180, equipment: "fo-lu600-001", action: "stop-streaming", description: "Emergency coverage complete" }
        ]
    },
    election: {
        name: "Election Night Coverage",
        inventory: "field-ops",
        events: [
            { time: 5, equipment: "fo-lu4000-001", action: "online", description: "Election HQ server ready" },
            { time: 10, equipment: "fo-lu600-001", action: "online", description: "Location 1: Campaign HQ" },
            { time: 15, equipment: "fo-lu600-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-1", description: "🗳️ Campaign HQ goes live" },
            { time: 30, equipment: "fo-lu610-001", action: "online", description: "Location 2: Polling station" },
            { time: 35, equipment: "fo-lu610-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "🗳️ Polling station live" },
            { time: 50, equipment: "fo-lu800pro-001", action: "online", description: "Location 3: Victory party venue" },
            { time: 55, equipment: "fo-lu800pro-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-3", description: "🗳️ Victory venue live" },
            { time: 75, equipment: "fo-lu600-001", action: "set-battery", value: 52, description: "Campaign HQ battery check" },
            { time: 90, equipment: "fo-lu610-001", action: "set-battery", value: 44, description: "Polling station battery check" },
            { time: 110, equipment: "fo-lu800pro-001", action: "set-battery", value: 38, description: "⚠️ Victory venue battery low" },
            { time: 130, equipment: "fo-lu600-001", action: "degrade-link", linkIndex: 0, signal: 3, description: "High network traffic - signal impact" },
            { time: 150, equipment: "fo-lu600-001", action: "restore-link", linkIndex: 0, signal: 5, description: "✅ Signal restored" },
            { time: 180, equipment: "fo-lu610-001", action: "stop-streaming", description: "Polling station wraps" },
            { time: 200, equipment: "fo-lu600-001", action: "stop-streaming", description: "Campaign HQ wraps" },
            { time: 220, equipment: "fo-lu800pro-001", action: "stop-streaming", description: "Election night coverage complete" }
        ]
    },
    morning: {
        name: "Morning Show Startup",
        inventory: "studio-production",
        events: [
            { time: 5, equipment: "st-lu2000-001", action: "online", description: "Studio server powering up" },
            { time: 10, equipment: "st-lu800pro-001", action: "online", description: "Studio Camera 1 ready" },
            { time: 15, equipment: "st-lu800pro-002", action: "online", description: "Studio Camera 2 ready" },
            { time: 20, equipment: "st-lu800pro-001", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-A", description: "🌅 Camera 1 live" },
            { time: 25, equipment: "st-lu800pro-002", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-B", description: "🌅 Camera 2 live" },
            { time: 40, equipment: "st-sdi-output-001", action: "online", description: "SDI output active" },
            { time: 45, equipment: "st-ndi-output-001", action: "online", description: "NDI output active" },
            { time: 60, equipment: "st-lu800pro-003", action: "online", description: "Remote segment unit ready" },
            { time: 70, equipment: "st-lu800pro-003", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-C", description: "🎤 Remote segment begins" },
            { time: 90, equipment: "st-lu800pro-003", action: "set-battery", value: 68, description: "Remote unit battery check" },
            { time: 110, equipment: "st-lu800pro-003", action: "stop-streaming", description: "Remote segment ends" },
            { time: 130, equipment: "st-lu800pro-001", action: "set-battery", value: 75, description: "Studio cameras still on mains power" },
            { time: 150, equipment: "st-lu800pro-001", action: "stop-streaming", description: "Camera 1 wrap" },
            { time: 155, equipment: "st-lu800pro-002", action: "stop-streaming", description: "Morning show complete" }
        ]
    },
    cloudproduction: {
        name: "Cloud Production",
        inventory: "cloud-setup",
        events: [
            { time: 10, equipment: "cl-cloudmmh-001", action: "online", description: "Cloud server online" },
            { time: 15, equipment: "cl-lu800hdr-001", action: "online", description: "HDR unit ready" },
            { time: 20, equipment: "cl-lu800hdr-001", action: "streaming", destination: "cloud-setup:cl-cloudmmh-001:channel:Cloud-Channel-1", description: "🎥 HDR stream begins" },
            { time: 40, equipment: "cl-lu800hdr-001", action: "set-battery", value: 82, description: "Battery nominal" },
            { time: 60, equipment: "cl-sdi-001", action: "online", description: "SDI output ready" },
            { time: 70, equipment: "cl-lu800hdr-001", action: "set-battery", value: 65, description: "Battery draining normally" },
            { time: 90, equipment: "cl-ndi-001", action: "online", description: "NDI stream ready" },
            { time: 100, equipment: "cl-lu800hdr-001", action: "set-battery", value: 48, description: "Battery below 50%" },
            { time: 120, equipment: "cl-lu800hdr-001", action: "stop-streaming", description: "Production complete" }
        ]
    },
    helicopter: {
        name: "Helicopter Chase",
        inventory: "field-ops",
        events: [
            { time: 5, equipment: "fo-lu4000-001", action: "online", description: "Field ops HQ ready" },
            { time: 10, equipment: "fo-lu800pro-001", action: "online", description: "Helicopter unit powering up" },
            { time: 20, equipment: "fo-lu800pro-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-1", description: "🚁 Helicopter feed LIVE - pursuit in progress" },
            { time: 30, equipment: "fo-lu800pro-001", action: "set-battery", value: 78, description: "Battery draining during aerial coverage" },
            { time: 40, equipment: "fo-lu800pro-001", action: "degrade-link", linkIndex: 0, signal: 3, description: "⚠️ AT&T signal weak at altitude" },
            { time: 50, equipment: "fo-lu800pro-001", action: "degrade-link", linkIndex: 1, signal: 2, description: "🔴 Verizon signal degrading - switching to sat" },
            { time: 55, equipment: "fo-lu800pro-001", action: "restore-link", linkIndex: 2, signal: 5, description: "✅ Satellite link active - stable feed" },
            { time: 70, equipment: "fo-lu600-001", action: "online", description: "Ground unit deploying" },
            { time: 80, equipment: "fo-lu600-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "Ground perspective added to coverage" },
            { time: 95, equipment: "fo-lu800pro-001", action: "set-battery", value: 52, description: "⚠️ Helicopter battery at 52%" },
            { time: 110, equipment: "fo-lu800pro-001", action: "restore-link", linkIndex: 0, signal: 5, description: "✅ Cellular restored - lower altitude" },
            { time: 130, equipment: "fo-lu800pro-001", action: "stop-streaming", description: "Helicopter returns to base" },
            { time: 140, equipment: "fo-lu600-001", action: "stop-streaming", description: "Coverage wrap" }
        ]
    },
    multisite: {
        name: "Multi-City Production",
        inventory: "broadcast-center",
        events: [
            { time: 5, equipment: "bc-lu2000-001", action: "online", description: "Broadcast center ready" },
            { time: 10, equipment: "bc-lu800pro-001", action: "online", description: "Studio Camera A ready" },
            { time: 15, equipment: "bc-lu800pro-001", action: "streaming", destination: "broadcast-center:bc-lu2000-001:channel:Channel-1", description: "🎬 Studio desk cam LIVE" },
            { time: 25, equipment: "bc-lu800pro-002", action: "online", description: "Studio Camera B ready" },
            { time: 30, equipment: "bc-lu800pro-002", action: "streaming", destination: "broadcast-center:bc-lu2000-001:channel:Channel-2", description: "Studio wide shot active" },
            { time: 40, equipment: "bc-lu600-001", action: "online", description: "Mobile reporter coming online" },
            { time: 50, equipment: "bc-lu600-001", action: "streaming", destination: "broadcast-center:bc-lu2000-001:channel:Channel-3", description: "📍 Reporter live from location" },
            { time: 60, equipment: "bc-lu600-001", action: "set-battery", value: 58, description: "Reporter battery check" },
            { time: 80, equipment: "bc-sdi-001", action: "online", description: "SDI output to master control" },
            { time: 90, equipment: "bc-ndi-001", action: "online", description: "NDI output for production switcher" },
            { time: 110, equipment: "bc-lu600-001", action: "set-battery", value: 32, description: "⚠️ Reporter battery low" },
            { time: 130, equipment: "bc-lu600-001", action: "stop-streaming", description: "Reporter wraps" },
            { time: 150, equipment: "bc-lu800pro-002", action: "stop-streaming", description: "Studio Camera B released" },
            { time: 160, equipment: "bc-lu800pro-001", action: "stop-streaming", description: "Show complete" }
        ]
    },
    globalbroadcast: {
        name: "Global News Feed",
        inventory: "cloud-setup",
        events: [
            { time: 5, equipment: "cl-cloudmmh-001", action: "online", description: "Cloud hub online" },
            { time: 10, equipment: "cl-lu800hdr-001", action: "online", description: "Brazil correspondent ready" },
            { time: 15, equipment: "cl-lu800hdr-001", action: "streaming", destination: "cloud-setup:cl-cloudmmh-001:channel:Cloud-Channel-1", description: "🌎 Live from Amazon - Documentary feed" },
            { time: 25, equipment: "cl-lu800hdr-001", action: "degrade-link", linkIndex: 1, signal: 1, description: "⚠️ Local 4G failing in remote location" },
            { time: 30, equipment: "cl-lu800hdr-001", action: "set-battery", value: 45, description: "🔋 Battery draining in field conditions" },
            { time: 50, equipment: "cl-lu800hdr-001", action: "degrade-link", linkIndex: 0, signal: 3, description: "⚠️ Starlink signal degraded - weather" },
            { time: 65, equipment: "cl-lu800hdr-001", action: "restore-link", linkIndex: 0, signal: 5, description: "✅ Starlink recovered - clear skies" },
            { time: 75, equipment: "cl-lu800hdr-001", action: "set-battery", value: 28, description: "🔴 Critical battery - 28% remaining" },
            { time: 90, equipment: "cl-sdi-001", action: "online", description: "SDI feed to broadcast" },
            { time: 100, equipment: "cl-ndi-001", action: "online", description: "NDI feed to production" },
            { time: 120, equipment: "cl-lu800hdr-001", action: "set-battery", value: 15, description: "🔴 CRITICAL - Battery nearly depleted" },
            { time: 135, equipment: "cl-lu800hdr-001", action: "stop-streaming", description: "Emergency battery save - feed ends" }
        ]
    },
    rapidresponse: {
        name: "Rapid Deployment",
        inventory: "field-ops",
        events: [
            { time: 3, equipment: "fo-lu4000-001", action: "online", description: "⚡ Field server RAPID START" },
            { time: 8, equipment: "fo-lu600-001", action: "online", description: "Unit 1 deploying" },
            { time: 12, equipment: "fo-lu600-002", action: "online", description: "Unit 2 deploying" },
            { time: 15, equipment: "fo-lu600-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-1", description: "🔴 Unit 1 LIVE - first on scene" },
            { time: 20, equipment: "fo-lu600-002", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "🔴 Unit 2 LIVE - second angle" },
            { time: 30, equipment: "fo-lu610-001", action: "online", description: "Sports unit redirected to scene" },
            { time: 35, equipment: "fo-lu610-001", action: "streaming", destination: "field-ops:fo-lu2000-001:channel:Channel-1", description: "Third feed added - wide coverage" },
            { time: 50, equipment: "fo-lu600-001", action: "set-battery", value: 62, description: "Unit 1 battery check" },
            { time: 55, equipment: "fo-lu600-002", action: "set-battery", value: 55, description: "Unit 2 battery check" },
            { time: 70, equipment: "fo-lu800pro-001", action: "online", description: "⚡ Helicopter arriving" },
            { time: 75, equipment: "fo-lu800pro-001", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-3", description: "🚁 Aerial view added - 4 camera operation" },
            { time: 90, equipment: "fo-lu600-001", action: "set-battery", value: 38, description: "⚠️ Unit 1 battery low" },
            { time: 100, equipment: "fo-lu600-002", action: "set-battery", value: 28, description: "⚠️ Unit 2 battery critical" },
            { time: 105, equipment: "fo-lu610-002", action: "online", description: "Backup van unit ready" },
            { time: 120, equipment: "fo-lu600-002", action: "stop-streaming", description: "Unit 2 battery swap" },
            { time: 125, equipment: "fo-lu610-002", action: "streaming", destination: "field-ops:fo-lu4000-001:channel:Channel-2", description: "Van unit takes over channel 2" },
            { time: 150, equipment: "fo-lu800pro-001", action: "stop-streaming", description: "Helicopter returns to base" },
            { time: 170, equipment: "fo-lu600-001", action: "stop-streaming", description: "Unit 1 wrap" },
            { time: 175, equipment: "fo-lu610-001", action: "stop-streaming", description: "Sports unit released" },
            { time: 180, equipment: "fo-lu610-002", action: "stop-streaming", description: "All clear - coverage complete" }
        ]
    },
    studioshow: {
        name: "Live Studio Show",
        inventory: "studio-production",
        events: [
            { time: 5, equipment: "st-lu2000-001", action: "online", description: "Studio server online" },
            { time: 10, equipment: "st-lu800pro-001", action: "online", description: "Camera 1 (Anchor) ready" },
            { time: 12, equipment: "st-lu800pro-002", action: "online", description: "Camera 2 (Guest) ready" },
            { time: 14, equipment: "st-lu800pro-003", action: "online", description: "Camera 3 (Wide) ready" },
            { time: 20, equipment: "st-lu800pro-001", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-A", description: "🎬 Camera 1 LIVE - Anchor" },
            { time: 25, equipment: "st-lu800pro-002", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-B", description: "🎬 Camera 2 LIVE - Guest" },
            { time: 30, equipment: "st-lu800pro-003", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-C", description: "🎬 Camera 3 LIVE - Wide shot" },
            { time: 40, equipment: "st-sdi-output-001", action: "online", description: "SDI to master control" },
            { time: 45, equipment: "st-ndi-output-001", action: "online", description: "NDI to production switcher" },
            { time: 50, equipment: "st-srt-out-001", action: "online", description: "SRT stream to web" },
            { time: 55, equipment: "st-rtmp-001", action: "online", description: "RTMP to social media" },
            { time: 70, equipment: "st-lu600-001", action: "online", description: "Remote interview unit ready" },
            { time: 75, equipment: "st-lu600-001", action: "streaming", destination: "studio-production:st-lu2000-001:channel:Studio-D", description: "📞 Remote guest joins via LiveU" },
            { time: 100, equipment: "st-lu600-001", action: "set-battery", value: 72, description: "Remote guest battery check" },
            { time: 130, equipment: "st-lu600-001", action: "stop-streaming", description: "Remote guest segment ends" },
            { time: 150, equipment: "st-lu800pro-003", action: "stop-streaming", description: "Camera 3 released" },
            { time: 160, equipment: "st-lu800pro-002", action: "stop-streaming", description: "Camera 2 released" },
            { time: 170, equipment: "st-lu800pro-001", action: "stop-streaming", description: "Show wrap - all cameras clear" }
        ]
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateInventoryDropdowns();

    const inventorySelect = document.getElementById('inventorySelect');
    if (currentInventory && inventories[currentInventory]) {
        if (inventorySelect) {
            inventorySelect.value = currentInventory;
        }
        selectInventory(true);
    } else {
        updateStats();
    }

    updateEquipmentList();
    updateScriptEventDropdown();
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('keydown', handleKeyDown);
    startLiveClock();
    showAlert('LiveU MCR System ready!', 'success');
});

// Navigation
function showPage(pageId, evt) {
    if (pageId !== 'mcr' && isCanvasFullscreen) {
        toggleCanvasFullscreen(false);
    }
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
    // Show page
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId + 'Page').classList.add('active');

    // Refresh content if needed
    if (pageId === 'mcr' && currentInventory) {
        renderMCR();
    } else if (pageId === 'inventory') {
        updateEquipmentList();
    } else if (pageId === 'script') {
        updateScriptTimeline();
        updateScriptEventDropdown();
    }
}

// Inventory Management
function populateInventoryDropdowns() {
    const mainDropdown = document.getElementById('inventorySelect');
    const equipmentDropdown = document.getElementById('equipmentInventory');
    const inventoryKeys = Object.keys(inventories);

    if (mainDropdown) {
        const previousValue = mainDropdown.value;
        mainDropdown.innerHTML = '<option value="">Select Inventory...</option>';
        inventoryKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = inventories[key].name;
            mainDropdown.appendChild(option);
        });
        const desiredValue = (currentInventory && inventories[currentInventory]) ? currentInventory : previousValue;
        if (desiredValue && inventories[desiredValue]) {
            mainDropdown.value = desiredValue;
        }
    }

    if (equipmentDropdown) {
        const previousValue = equipmentDropdown.value;
        equipmentDropdown.innerHTML = '<option value="">Select Inventory...</option>';
        inventoryKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = inventories[key].name;
            equipmentDropdown.appendChild(option);
        });
        let desiredValue = previousValue;
        if (editingEquipment && inventories[editingEquipment.inventoryKey]) {
            desiredValue = editingEquipment.inventoryKey;
        } else if (currentInventory && inventories[currentInventory]) {
            desiredValue = currentInventory;
        }
        if (desiredValue && inventories[desiredValue]) {
            equipmentDropdown.value = desiredValue;
        }
    }
}

function selectInventory(silent = false, overrideKey) {
    const selectElement = document.getElementById('inventorySelect');
    let selectedKey;

    if (typeof overrideKey === 'string') {
        selectedKey = overrideKey;
        if (selectElement) {
            selectElement.value = overrideKey;
        }
    } else {
        selectedKey = selectElement ? selectElement.value : '';
    }

    currentInventory = selectedKey;

    if (currentInventory && !inventories[currentInventory]) {
        currentInventory = '';
    }

    if (editingEquipment && (!currentInventory || editingEquipment.inventoryKey !== currentInventory)) {
        resetEquipmentForm();
    }

    saveLastInventoryKey(currentInventory);

    if (currentInventory) {
        userAdjustedZoom = false;
        renderMCR();
        if (!silent) {
            showAlert(`Loaded inventory: ${inventories[currentInventory].name}`, 'success');
        }
    } else {
        const container = document.getElementById('mcrContainer');
        if (container) {
            container.innerHTML = '<div class="no-equipment">Please select an inventory to view equipment</div>';
        }
        updateStats();
    }

    if (!editingEquipment) {
        const equipmentDropdown = document.getElementById('equipmentInventory');
        if (equipmentDropdown) {
            equipmentDropdown.value = currentInventory || '';
        }
    }

    updateEquipmentList();
}

// MCR Rendering
function renderMCR() {
    const container = document.getElementById('mcrContainer');
    if (!container) return;

    if (!currentInventory || !inventories[currentInventory]) {
        container.innerHTML = '<div class="no-equipment">Please select an inventory to view equipment</div>';
        const controls = createCanvasControls();
        container.appendChild(controls);
        updateCanvasControls(controls);
        updateStats();
        return;
    }

    const equipment = inventories[currentInventory].equipment || [];

    if (!container.dataset.zoomBound) {
        container.addEventListener('wheel', handleCanvasWheel, { passive: false });
        container.dataset.zoomBound = 'true';
    }
    if (!container.dataset.panBound) {
        container.addEventListener('mousedown', handleCanvasMouseDown);
        container.dataset.panBound = 'true';
    }

    container.innerHTML = '';

    if (equipment.length === 0) {
        container.innerHTML = '<div class="no-equipment">No equipment configured in this inventory</div>';
        const controls = createCanvasControls();
        container.appendChild(controls);
        updateCanvasControls(controls);
        updateStats();
        return;
    }

    const canvas = document.createElement('div');
    canvas.id = 'mcrCanvas';
    canvas.className = 'mcr-canvas';
    canvas.dataset.inventoryKey = currentInventory;
    container.appendChild(canvas);

    let minX = Infinity;
    let minY = Infinity;

    equipment.forEach(item => {
        minX = Math.min(minX, item.x ?? 0);
        minY = Math.min(minY, item.y ?? 0);
    });

    if (!Number.isFinite(minX)) minX = 0;
    if (!Number.isFinite(minY)) minY = 0;

    const margin = 200;

    equipment.forEach(item => {
        const node = createEquipmentNode(item);
        canvas.appendChild(node);
    });

    const nodes = Array.from(canvas.children);
    let contentWidth = 0;
    let contentHeight = 0;

    nodes.forEach((node, index) => {
        const item = equipment[index];
        const normalizedLeft = (item.x ?? 0) - minX + margin;
        const normalizedTop = (item.y ?? 0) - minY + margin;
        node.style.left = `${normalizedLeft}px`;
        node.style.top = `${normalizedTop}px`;
        contentWidth = Math.max(contentWidth, normalizedLeft + node.offsetWidth);
        contentHeight = Math.max(contentHeight, normalizedTop + node.offsetHeight);
    });

    const baseWidth = Math.max(contentWidth + margin, container.clientWidth);
    const baseHeight = Math.max(contentHeight + margin, container.clientHeight);

    canvas.style.width = `${baseWidth}px`;
    canvas.style.height = `${baseHeight}px`;
    canvas.dataset.baseWidth = baseWidth;
    canvas.dataset.baseHeight = baseHeight;
    canvas.dataset.minX = minX;
    canvas.dataset.minY = minY;
    canvas.dataset.margin = margin;

    if (!userAdjustedZoom) {
        fitCanvasToView();
    } else {
        updateCanvasTransform();
    }

    scheduleConnectionRedraw();

    const controlsOverlay = createCanvasControls();
    container.appendChild(controlsOverlay);
    updateCanvasControls(controlsOverlay);

    updateStats();
}

function updateCanvasTransform(options = {}) {
    const { forceClamp = false } = options;
    const container = document.getElementById('mcrContainer');
    const canvas = document.getElementById('mcrCanvas');
    if (!container || !canvas) return;

    if (forceClamp || !userAdjustedZoom) {
        clampTransformToBounds(container, canvas);
    }

    canvas.style.transform = `translate(${mcrTransform.translateX}px, ${mcrTransform.translateY}px) scale(${mcrTransform.scale})`;

    scheduleConnectionRedraw();
}

function clampTransformToBounds(container, canvas) {
    const baseWidth = parseFloat(canvas.dataset.baseWidth) || canvas.offsetWidth || container.clientWidth;
    const baseHeight = parseFloat(canvas.dataset.baseHeight) || canvas.offsetHeight || container.clientHeight;
    const scale = mcrTransform.scale || 1;
    const availableWidth = container.clientWidth;
    const availableHeight = container.clientHeight;

    if (baseWidth * scale <= availableWidth) {
        mcrTransform.translateX = (availableWidth / scale - baseWidth) / 2;
    } else {
        const minTranslateX = availableWidth / scale - baseWidth;
        const maxTranslateX = 0;
        mcrTransform.translateX = Math.min(Math.max(mcrTransform.translateX, minTranslateX), maxTranslateX);
    }

    if (baseHeight * scale <= availableHeight) {
        mcrTransform.translateY = (availableHeight / scale - baseHeight) / 2;
    } else {
        const minTranslateY = availableHeight / scale - baseHeight;
        const maxTranslateY = 0;
        mcrTransform.translateY = Math.min(Math.max(mcrTransform.translateY, minTranslateY), maxTranslateY);
    }
}

function fitCanvasToView() {
    const container = document.getElementById('mcrContainer');
    const canvas = document.getElementById('mcrCanvas');
    if (!container || !canvas) return;

    const baseWidth = parseFloat(canvas.dataset.baseWidth) || canvas.offsetWidth || container.clientWidth;
    const baseHeight = parseFloat(canvas.dataset.baseHeight) || canvas.offsetHeight || container.clientHeight;

    if (!baseWidth || !baseHeight) {
        mcrTransform.scale = 1;
        mcrTransform.translateX = 0;
        mcrTransform.translateY = 0;
        updateCanvasTransform();
        return;
    }

    const availableWidth = container.clientWidth;
    const availableHeight = container.clientHeight;
    const fitScale = Math.min(1, Math.min(availableWidth / baseWidth, availableHeight / baseHeight));

    mcrTransform.scale = fitScale || 1;
    mcrTransform.translateX = (availableWidth / mcrTransform.scale - baseWidth) / 2;
    mcrTransform.translateY = (availableHeight / mcrTransform.scale - baseHeight) / 2;

    updateCanvasTransform({ forceClamp: true });
}

function setZoom(targetScale, anchor) {
    const container = document.getElementById('mcrContainer');
    const canvas = document.getElementById('mcrCanvas');
    if (!container || !canvas) return;

    const clampedScale = Math.min(ZOOM_CONFIG.max, Math.max(ZOOM_CONFIG.min, targetScale));
    const previousScale = mcrTransform.scale || 1;
    const effectiveAnchor = anchor || {
        x: container.clientWidth / 2,
        y: container.clientHeight / 2
    };

    const canvasX = effectiveAnchor.x / previousScale - mcrTransform.translateX;
    const canvasY = effectiveAnchor.y / previousScale - mcrTransform.translateY;

    mcrTransform.scale = clampedScale;
    mcrTransform.translateX = effectiveAnchor.x / clampedScale - canvasX;
    mcrTransform.translateY = effectiveAnchor.y / clampedScale - canvasY;

    updateCanvasTransform();
}

function zoomIn() {
    if (!document.getElementById('mcrCanvas')) return;
    userAdjustedZoom = true;
    setZoom(mcrTransform.scale + ZOOM_CONFIG.step);
}

function zoomOut() {
    if (!document.getElementById('mcrCanvas')) return;
    userAdjustedZoom = true;
    setZoom(mcrTransform.scale - ZOOM_CONFIG.step);
}

function resetZoom() {
    if (!document.getElementById('mcrCanvas')) return;
    userAdjustedZoom = false;
    fitCanvasToView();
}

function handleCanvasWheel(evt) {
    const canvas = document.getElementById('mcrCanvas');
    if (!canvas) return;

    evt.preventDefault();
    evt.stopPropagation();

    const direction = evt.deltaY < 0 ? 1 : -1;
    const modifier = (evt.ctrlKey || evt.metaKey) ? 0.5 : 1;
    const targetScale = mcrTransform.scale + direction * ZOOM_CONFIG.step * modifier;
    userAdjustedZoom = true;

    setZoom(targetScale, getZoomAnchor(evt));
}

function getCanvasPointer(event) {
    const container = document.getElementById('mcrContainer');
    if (!container) return { x: 0, y: 0 };

    const rect = container.getBoundingClientRect();
    const scale = mcrTransform.scale || 1;

    return {
        x: (event.clientX - rect.left) / scale - mcrTransform.translateX,
        y: (event.clientY - rect.top) / scale - mcrTransform.translateY
    };
}

function getZoomAnchor(event) {
    const container = document.getElementById('mcrContainer');
    if (!container) return null;
    const rect = container.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function handleWindowResize() {
    const canvas = document.getElementById('mcrCanvas');
    if (!canvas) return;
    if (userAdjustedZoom) {
        updateCanvasTransform();
    } else {
        fitCanvasToView();
    }
}

function createCanvasControls() {
    const wrapper = document.createElement('div');
    wrapper.className = 'canvas-controls';

    const controls = [
        { control: 'zoom-in', icon: '+', label: 'Zoom In', action: zoomIn },
        { control: 'zoom-out', icon: '−', label: 'Zoom Out', action: zoomOut },
        { control: 'fit', icon: '⌖', label: 'Fit to View', action: resetZoom },
        { control: 'refresh', icon: '⟳', label: 'Refresh', action: refreshMCR },
        { control: 'connections', icon: '⛓', label: 'Toggle Connections', action: () => toggleConnections() },
        { control: 'auto', icon: '⏱', label: 'Toggle Auto Refresh', action: () => toggleAutoRefresh() }
    ];

    controls.forEach(({ control, icon, label, action }) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'canvas-control-btn';
        btn.dataset.control = control;
        btn.title = label;
        btn.setAttribute('aria-label', label);
        btn.innerHTML = `<span class="canvas-control-icon">${icon}</span><span class="canvas-control-label"></span>`;
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            action();
        });
        wrapper.appendChild(btn);
    });

    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.type = 'button';
    fullscreenBtn.className = 'canvas-control-btn canvas-control-btn--primary';
    fullscreenBtn.dataset.control = 'fullscreen';
    fullscreenBtn.innerHTML = '<span class="canvas-control-icon">⤢</span><span class="canvas-control-label"></span>';
    fullscreenBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleCanvasFullscreen();
    });
    wrapper.appendChild(fullscreenBtn);

    wrapper.addEventListener('mousedown', (event) => event.stopPropagation());
    wrapper.addEventListener('wheel', (event) => {
        event.stopPropagation();
        event.preventDefault();
    });

    return wrapper;
}

function updateCanvasControls(scope) {
    const root = scope instanceof Element ? scope : document;
    const fullscreenBtn = root.querySelector('[data-control="fullscreen"]');
    if (fullscreenBtn) {
        const label = fullscreenBtn.querySelector('.canvas-control-label');
        const icon = fullscreenBtn.querySelector('.canvas-control-icon');
        const text = isCanvasFullscreen ? 'Exit View' : 'Full View';
        fullscreenBtn.classList.toggle('is-active', isCanvasFullscreen);
        fullscreenBtn.title = isCanvasFullscreen ? 'Exit Full View' : 'Enter Full View';
        fullscreenBtn.setAttribute('aria-label', fullscreenBtn.title);
        fullscreenBtn.setAttribute('aria-pressed', String(isCanvasFullscreen));
        if (label) label.textContent = text;
        if (icon) icon.textContent = isCanvasFullscreen ? '⤫' : '⤢';
    }

    const connectionsBtn = root.querySelector('[data-control="connections"]');
    if (connectionsBtn) {
        connectionsBtn.classList.toggle('is-active', showConnections);
        const stateLabel = showConnections ? 'Hide Connections' : 'Show Connections';
        connectionsBtn.title = stateLabel;
        connectionsBtn.setAttribute('aria-label', stateLabel);
        connectionsBtn.setAttribute('aria-pressed', String(showConnections));
    }

    const autoBtn = root.querySelector('[data-control="auto"]');
    if (autoBtn) {
        autoBtn.classList.toggle('is-active', autoRefresh);
        const stateLabel = autoRefresh ? 'Disable Auto Refresh' : 'Enable Auto Refresh';
        autoBtn.title = stateLabel;
        autoBtn.setAttribute('aria-label', stateLabel);
        autoBtn.setAttribute('aria-pressed', String(autoRefresh));
    }
}

function toggleCanvasFullscreen(force) {
    const desired = typeof force === 'boolean' ? force : !isCanvasFullscreen;
    if (desired === isCanvasFullscreen) {
        updateCanvasControls();
        return;
    }

    isCanvasFullscreen = desired;
    document.body.classList.toggle('canvas-fullscreen', isCanvasFullscreen);
    userAdjustedZoom = false;
    updateCanvasControls();
    requestAnimationFrame(() => {
        fitCanvasToView();
        updateCanvasControls();
    });
}

function handleKeyDown(event) {
    if (event.key === 'Escape' && isCanvasFullscreen) {
        event.preventDefault();
        toggleCanvasFullscreen(false);
    }
}

function createEquipmentNode(equipment) {
    const node = document.createElement('div');

    // Determine the correct status class based on LiveU logic
    let statusClass = determineEquipmentStatus(equipment);

    // HACKATHON ENHANCEMENT: Add on-air class
    const onAirClass = equipment.onAir ? 'on-air' : '';

    node.className = `equipment-node ${statusClass} ${equipment.type} ${onAirClass}`;
    node.dataset.x = equipment.x ?? 0;
    node.dataset.y = equipment.y ?? 0;
    node.style.left = '0px';
    node.style.top = '0px';
    node.setAttribute('data-id', equipment.id);

    // Generate appropriate HTML based on equipment type
    node.innerHTML = createEquipmentHTML(equipment, statusClass);

    ensureConnectorAnchors(node, equipment);

    // Add drag functionality
    node.addEventListener('mousedown', startDrag);

    // HACKATHON ENHANCEMENT: Add click handlers for interactive elements
    node.addEventListener('click', (e) => {
        // Toggle links section
        if (e.target.closest('.links-header')) {
            const linksSection = e.target.closest('.links-section');
            if (linksSection) {
                linksSection.classList.toggle('expanded');
            }
            e.stopPropagation();
            return;
        }

        // Show equipment detail modal on double-click
        if (!draggedElement) {
            selectEquipment(equipment);
        }
    });

    // Add double-click for detail modal
    node.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        showEquipmentDetail(equipment);
    });

    return node;
}

function ensureConnectorAnchors(node, equipment) {
    if (!node || !equipment) return;

    const hasInputAnchor = node.querySelector('.connector-anchor.input');
    if (!hasInputAnchor) {
        const inputAnchor = document.createElement('span');
        inputAnchor.className = 'connector-anchor input default-anchor';
        inputAnchor.dataset.anchorSide = 'input';
        inputAnchor.dataset.anchorType = 'equipment';
        inputAnchor.dataset.equipmentAnchor = `${equipment.id}:input`;
        node.appendChild(inputAnchor);
    }

    const hasOutputAnchor = node.querySelector('.connector-anchor.output');
    if (!hasOutputAnchor) {
        const outputAnchor = document.createElement('span');
        outputAnchor.className = 'connector-anchor output default-anchor';
        outputAnchor.dataset.anchorSide = 'output';
        outputAnchor.dataset.anchorType = 'equipment';
        outputAnchor.dataset.equipmentAnchor = `${equipment.id}:output`;
        node.appendChild(outputAnchor);
    }
}

function determineEquipmentStatus(equipment) {
    const explicitStatus = (equipment.status || '').toLowerCase();
    if (explicitStatus === 'offline') return 'offline';
    if (explicitStatus === 'streaming') return 'streaming';
    if (explicitStatus === 'connected') return 'connected';

    if (equipment.type === 'unit') {
        const hasStreamingEncoder = equipment.encoders?.some(enc => enc.status === 'streaming');
        const hasConnectedEncoder = equipment.encoders?.some(enc => enc.status === 'connected');

        if (hasStreamingEncoder) return 'streaming';
        if (hasConnectedEncoder) return 'connected';
        if (equipment.channel) return 'streaming';
        return 'online';

    } else if (equipment.type === 'server') {
        const hasStreamingChannel = equipment.channels?.some(ch => ch.status === 'streaming');
        const hasConnectedChannel = equipment.channels?.some(ch => ch.status === 'connected');

        if (hasStreamingChannel) return 'streaming';
        if (hasConnectedChannel) return 'connected';
        return 'online';

    } else if (equipment.type === 'transceiver') {
        const hasStreamingEncoder = equipment.encoders?.some(enc => enc.status === 'streaming');
        const hasStreamingDecoder = equipment.decoders?.some(dec => dec.status === 'streaming');
        const hasConnectedEncoder = equipment.encoders?.some(enc => enc.status === 'connected');
        const hasConnectedDecoder = equipment.decoders?.some(dec => dec.status === 'connected');

        if (hasStreamingEncoder || hasStreamingDecoder) return 'streaming';
        if (hasConnectedEncoder || hasConnectedDecoder) return 'connected';
        return 'online';

    } else if (equipment.type === 'destination') {
        if (equipment.connectedChannel) return 'streaming';
        return 'online';

    } else if (equipment.type === 'ingest') {
        const hasActive = equipment.activeRecordings?.length > 0;
        if (hasActive) return 'streaming';
        if (equipment.associatedChannels?.length) return 'connected';
        return 'online';

    } else if (equipment.type === 'srt-in') {
        const channelStatus = (equipment.channel?.status || '').toLowerCase();
        if (channelStatus === 'streaming') return 'streaming';
        if (channelStatus === 'connected') return 'connected';
        return 'online';

    } else {
        return 'online';
    }
}

function createEquipmentHTML(equipment, statusClass) {
    const alerts = createAlertsHTML(equipment);
    
    switch (equipment.type) {
        case 'unit':
            return createUnitHTML(equipment, statusClass) + alerts;
        case 'server':
            return createServerHTML(equipment, statusClass) + alerts;
        case 'transceiver':
            return createTransceiverHTML(equipment, statusClass) + alerts;
        case 'ingest':
            return createIngestHTML(equipment, statusClass) + alerts;
        case 'srt-in':
            return createSRTInHTML(equipment, statusClass) + alerts;
        case 'destination':
            return createDestinationHTML(equipment, statusClass) + alerts;
        default:
            return createGenericHTML(equipment, statusClass) + alerts;
    }
}

function createUnitHTML(equipment, statusClass) {
    // ON-AIR Banner
    const onAirBanner = equipment.onAir ? '<div class="on-air-banner">🔴 LIVE</div>' : '';

    // Story Badge
    const storyBadge = equipment.story ? `
        <div class="story-badge">
            <div class="story-title">📋 ${equipment.story.slugline}</div>
            <div class="crew-name">👤 ${equipment.story.crew}</div>
        </div>
    ` : '';

    // Battery Indicator
    let batteryHTML = '';
    if (equipment.battery) {
        const batteryIcon = equipment.battery.percentage > 80 ? '🔋' :
                          equipment.battery.percentage > 50 ? '🔋' :
                          equipment.battery.percentage > 20 ? '🪫' : '🪫';
        const chargingIcon = equipment.battery.charging ? ' ⚡' : '';
        const batteryClass = equipment.battery.percentage < 20 ? 'battery-indicator critical' :
                            equipment.battery.percentage < 50 ? 'battery-indicator low' : 'battery-indicator';
        const hours = Math.floor(equipment.battery.remainingMinutes / 60);
        const mins = equipment.battery.remainingMinutes % 60;

        batteryHTML = `
            <div class="${batteryClass}">
                ${batteryIcon} ${equipment.battery.percentage}% (${hours}h ${mins}m)${chargingIcon}
            </div>
        `;
    }

    // Links Section (collapsible)
    let linksHTML = '';
    if (equipment.links && equipment.links.length > 0) {
        const activeLinks = equipment.links.filter(l => l.connected).length;
        const linksDetailHTML = equipment.links.map(link => {
            const signalBars = '●'.repeat(link.signal) + '○'.repeat(5 - link.signal);
            const signalClass = link.signal >= 4 ? 'signal-strength' :
                              link.signal >= 2 ? 'signal-strength weak' : 'signal-strength critical';
            const linkClass = link.signal === 0 ? 'link-item failed' :
                            link.signal < 3 ? 'link-item degraded' : 'link-item';
            const bwDisplay = link.connected ? `${(link.bandwidth / 1000).toFixed(1)} Mbps ↑` : 'Disconnected';

            return `
                <div class="${linkClass}">
                    <span>📡 ${link.name}</span>
                    <span class="${signalClass}">${signalBars}</span>
                    <span>${bwDisplay}</span>
                </div>
            `;
        }).join('');

        linksHTML = `
            <div class="links-section" data-equipment-id="${equipment.id}">
                <div class="links-header">
                    Links: ${activeLinks} active
                </div>
                <div class="links-detail">
                    ${linksDetailHTML}
                </div>
            </div>
        `;
    }

    const encodersHTML = equipment.encoders?.map((encoder, idx) => `
        <div class="encoder-item ${encoder.status}" data-encoder-id="${escapeAttribute(encoder.id)}">
            <span>Encoder ${encoder.id}</span>
            <span class="instance-status ${encoder.status}">${encoder.status}</span>
            <span class="connector-anchor output" data-encoder-id="${escapeAttribute(encoder.id)}" data-anchor-side="output" data-anchor-type="encoder"></span>
        </div>
    `).join('') || '';

    const targetLabel = describeRoutingValue(equipment.channel);

    const bandwidthPercent = (equipment.bandwidth?.current / equipment.bandwidth?.max * 100) || 0;
    const bandwidthHTML = equipment.bandwidth ? `
        <div class="bandwidth-bar">
            <div class="bandwidth-fill" style="width: ${bandwidthPercent}%"></div>
        </div>
        <div class="bandwidth-text">${equipment.bandwidth.current}/${equipment.bandwidth.max} Kbps</div>
    ` : '';

    // Extras (delay, video return, location)
    let extrasHTML = '';
    const extras = [];
    if (equipment.delay) {
        extras.push(`<span class="delay-indicator">⏱️ ${(equipment.delay / 1000).toFixed(1)}s delay</span>`);
    }
    if (equipment.videoReturn) {
        extras.push(`<span class="vr-indicator">↩️ VR Active</span>`);
    }
    if (equipment.location) {
        extras.push(`<div class="location-badge">📍 ${equipment.location}</div>`);
    }
    if (extras.length > 0) {
        extrasHTML = `<div class="node-extras">${extras.join('')}</div>`;
    }

    return `
        ${onAirBanner}
        ${storyBadge}
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <div class="node-info">
            Product: ${equipment.product}<br>
            Mode: ${equipment.mode || 'N/A'}<br>
            Uptime: ${equipment.uptime || 'N/A'}
            ${targetLabel ? `<br><strong>→ ${targetLabel}</strong>` : ''}
        </div>
        ${encodersHTML ? `<div class="encoders-container">${encodersHTML}</div>` : ''}
        ${bandwidthHTML}
        ${batteryHTML}
        ${extrasHTML}
        ${linksHTML}
    `;
}

function createServerHTML(equipment, statusClass) {
    const channelsHTML = equipment.channels?.map(channel => `
        <div class="channel-item ${channel.status} ${channel.recording ? 'recording' : ''}" data-channel-id="${escapeAttribute(channel.id)}">
            <span class="connector-anchor input" data-channel-anchor="${escapeAttribute(channel.id)}:input" data-channel-id="${escapeAttribute(channel.id)}" data-anchor-side="input" data-anchor-type="channel"></span>
            <span>${channel.id}</span>
            <span class="instance-status ${channel.status}">
                ${channel.status}${channel.recording ? ' 🔴' : ''}
            </span>
            <span class="connector-anchor output" data-channel-anchor="${escapeAttribute(channel.id)}:output" data-channel-id="${escapeAttribute(channel.id)}" data-anchor-side="output" data-anchor-type="channel"></span>
        </div>
    `).join('') || '';

    const instancesHTML = equipment.instances?.map(instance => `
        <div class="instance ${instance.status}" data-instance-name="${escapeAttribute(instance.name)}">
            <span class="connector-anchor input" data-instance-anchor="${escapeAttribute(instance.name)}:input" data-instance-name="${escapeAttribute(instance.name)}" data-anchor-side="input" data-anchor-type="instance"></span>
            <span class="instance-name">${instance.name}</span>
            <span class="instance-status ${instance.status}">${instance.status}</span>
            <span class="connector-anchor output" data-instance-anchor="${escapeAttribute(instance.name)}:output" data-instance-name="${escapeAttribute(instance.name)}" data-anchor-side="output" data-anchor-type="instance"></span>
        </div>
    `).join('') || '';

    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <div class="node-info">
            Product: ${equipment.product}
            ${equipment.ingestAssociation ? `<br>📹 Recording: ${equipment.ingestAssociation}` : ''}
        </div>
        ${channelsHTML ? `<div class="channels-container">${channelsHTML}</div>` : ''}
        ${instancesHTML ? `<div class="server-instances">${instancesHTML}</div>` : ''}
    `;
}

function createTransceiverHTML(equipment, statusClass) {
    const encodersHTML = equipment.encoders?.map(encoder => `
        <div class="encoder-item ${encoder.status}" data-encoder-id="${escapeAttribute(encoder.id)}">
            <span>Enc ${encoder.id}</span>
            <span class="instance-status ${encoder.status}">${encoder.status}</span>
            <span class="connector-anchor output" data-encoder-id="${escapeAttribute(encoder.id)}" data-anchor-side="output" data-anchor-type="encoder"></span>
        </div>
    `).join('') || '';

    const decodersHTML = equipment.decoders?.map(decoder => `
        <div class="channel-item ${decoder.status}" data-decoder-id="${escapeAttribute(decoder.id)}">
            <span class="connector-anchor input" data-decoder-anchor="${escapeAttribute(decoder.id)}:input" data-decoder-id="${escapeAttribute(decoder.id)}" data-anchor-side="input" data-anchor-type="decoder"></span>
            <span>Dec ${decoder.id}</span>
            <span class="instance-status ${decoder.status}">${decoder.status}</span>
            <span class="connector-anchor output" data-decoder-anchor="${escapeAttribute(decoder.id)}:output" data-decoder-id="${escapeAttribute(decoder.id)}" data-anchor-side="output" data-anchor-type="decoder"></span>
        </div>
    `).join('') || '';

    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <div class="node-info">
            Config: ${equipment.config?.encoders}E/${equipment.config?.decoders}D
        </div>
        ${encodersHTML ? `<div class="transceiver-section"><div class="transceiver-title">Encoders</div><div class="encoders-container">${encodersHTML}</div></div>` : ''}
        ${decodersHTML ? `<div class="transceiver-section"><div class="transceiver-title">Decoders</div><div class="channels-container">${decodersHTML}</div></div>` : ''}
    `;
}

function createIngestHTML(equipment, statusClass) {
    const diskPercent = (equipment.diskSpace?.used / equipment.diskSpace?.total * 100) || 0;
    
    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <span class="connector-anchor input" data-ingest-anchor="${escapeAttribute(equipment.id)}:input" data-ingest-id="${escapeAttribute(equipment.id)}" data-anchor-side="input" data-anchor-type="ingest"></span>
        <span class="connector-anchor output" data-ingest-anchor="${escapeAttribute(equipment.id)}:output" data-ingest-id="${escapeAttribute(equipment.id)}" data-anchor-side="output" data-anchor-type="ingest"></span>
        <div class="node-info">
            Storage: ${equipment.diskSpace?.used || 0}/${equipment.diskSpace?.total || 0} GB<br>
            Channels: ${equipment.associatedChannels?.length || 0}<br>
            Active: ${equipment.activeRecordings?.length || 0} recordings
        </div>
        <div class="bandwidth-bar">
            <div class="bandwidth-fill" style="width: ${diskPercent}%; background: linear-gradient(90deg, #00ff00 0%, #ffff00 70%, #ff0000 100%);"></div>
        </div>
    `;
}

function createSRTInHTML(equipment, statusClass) {
    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <span class="connector-anchor input" data-srt-anchor="${escapeAttribute(equipment.id)}:input" data-srt-id="${escapeAttribute(equipment.id)}" data-anchor-side="input" data-anchor-type="srt"></span>
        <span class="connector-anchor output" data-srt-anchor="${escapeAttribute(equipment.id)}:output" data-srt-id="${escapeAttribute(equipment.id)}" data-anchor-side="output" data-anchor-type="srt"></span>
        <div class="node-info">
            Accepts: ${equipment.acceptedFormats?.join(', ') || 'SRT, RTMP'}<br>
            Output: LRT Protocol<br>
            ${equipment.channel?.source ? `Source: ${equipment.channel.source}` : 'No input'}
        </div>
    `;
}

function createDestinationHTML(equipment, statusClass) {
    const inputLabel = getDestinationInputLabel(equipment);

    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <span class="connector-anchor input" data-destination-anchor="${escapeAttribute(equipment.id)}:input" data-destination-id="${escapeAttribute(equipment.id)}" data-anchor-side="input" data-anchor-type="destination"></span>
        <span class="connector-anchor output" data-destination-anchor="${escapeAttribute(equipment.id)}:output" data-destination-id="${escapeAttribute(equipment.id)}" data-anchor-side="output" data-anchor-type="destination"></span>
        <div class="node-info">
            Type: ${equipment.product}<br>
            ${equipment.hardware ? `Hardware: ${equipment.hardware}` : ''}
            ${equipment.supportsEncoderInput ? '<br>Accepts: Encoder Inputs' : ''}
            ${equipment.streamName ? `Stream: ${equipment.streamName}` : ''}
            ${inputLabel ? `Input: ${inputLabel}` : 'No input'}
        </div>
    `;
}

function createGenericHTML(equipment, statusClass) {
    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${statusClass}">${statusClass.toUpperCase()}</div>
        </div>
        <div class="node-info">
            Product: ${equipment.product}
        </div>
    `;
}

function createAlertsHTML(equipment) {
    if (!equipment.alerts || equipment.alerts.length === 0) return '';
    
    const alertsHTML = equipment.alerts.map(alert => {
        const alertType = ALERT_TYPES[alert.type] || ALERT_TYPES['connection-lost'];
        const alertClass = alert.type.includes('warning') ? 'warning' : 
                         alert.type.includes('info') ? 'info' : '';
        
        return `<div class="alert-badge ${alertClass}" title="${alertType.message}">${alertType.icon}</div>`;
    }).join('');
    
    return `<div class="equipment-alerts">${alertsHTML}</div>`;
}

// Form helper functions
function updateEquipmentForm() {
    const typeSelect = document.getElementById('equipmentType');
    const type = typeSelect ? typeSelect.value : '';
    const transceiverConfig = document.getElementById('transceiverConfig');
    const destinationEncoderGroup = document.getElementById('destinationEncoderGroup');
    const destinationEncoderSelect = document.getElementById('destinationEncoder');

    if (transceiverConfig) {
        transceiverConfig.style.display = type === 'Transceiver' ? 'block' : 'none';
    }

    if (destinationEncoderGroup) {
        const destinationDefinition = ENTITY_TYPES.destinations[type];
        const supportsEncoders = Boolean(destinationDefinition && destinationDefinition.acceptsEncoders);
        const isUnit = Boolean(ENTITY_TYPES.units[type]);
        const shouldShow = supportsEncoders || isUnit;

        if (shouldShow) {
            destinationEncoderGroup.style.display = 'block';

            let desiredValue = destinationEncoderSelect ? destinationEncoderSelect.value : '';
            if (!desiredValue && editingEquipment) {
                const { inventoryKey, equipmentId } = editingEquipment;
                const inventory = inventories[inventoryKey];
                if (inventory) {
                    const equipment = inventory.equipment.find(eq => eq.id === equipmentId);
                    if (equipment) {
                        if (equipment.type === 'destination' && (isEncoderRoutingString(equipment.connectedChannel) || isDecoderTargetString(equipment.connectedChannel))) {
                            desiredValue = equipment.connectedChannel;
                        } else if (equipment.type === 'unit') {
                            if (isDecoderTargetString(equipment.channel)) {
                                desiredValue = equipment.channel;
                            } else if (Array.isArray(equipment.encoders)) {
                                const streamingEncoder = equipment.encoders.find(enc => enc && enc.status === 'streaming' && enc.channel && isDecoderTargetString(enc.channel));
                                if (streamingEncoder) {
                                    desiredValue = streamingEncoder.channel;
                                }
                            }
                        }
                    }
                }
            }

            populateDestinationEncoderOptions(desiredValue, {
                allowDecoderTargets: isUnit
            });
        } else {
            destinationEncoderGroup.style.display = 'none';
            if (destinationEncoderSelect) {
                destinationEncoderSelect.value = '';
            }
        }
    }
}

function populateDestinationEncoderOptions(selectedValue = '', options = {}) {
    const encoderSelect = document.getElementById('destinationEncoder');
    if (!encoderSelect) return;

    const allowDecoderTargets = Boolean(options.allowDecoderTargets);
    const sanitizedSelection = typeof selectedValue === 'string' ? selectedValue : '';
    const inventorySelect = document.getElementById('equipmentInventory');
    let targetInventoryKey = inventorySelect ? inventorySelect.value : '';
    if (!targetInventoryKey && editingEquipment) {
        targetInventoryKey = editingEquipment.inventoryKey;
    }
    if (!targetInventoryKey && currentInventory && inventories[currentInventory]) {
        targetInventoryKey = currentInventory;
    }

    const inventoryKeys = targetInventoryKey
        ? [targetInventoryKey]
        : Object.keys(inventories || {});

    encoderSelect.innerHTML = allowDecoderTargets
        ? '<option value="">Select Decoder...</option>'
        : '<option value="">Select Encoder...</option>';

    const optionNodes = [];
    inventoryKeys.forEach(invKey => {
        const inventory = inventories[invKey];
        if (!inventory || !Array.isArray(inventory.equipment)) return;

        inventory.equipment.forEach(eq => {
            if (!eq) return;

            if (allowDecoderTargets) {
                if (eq.type === 'transceiver' && Array.isArray(eq.decoders)) {
                    eq.decoders.forEach(decoder => {
                        if (!decoder) return;
                        const value = buildDecoderRoutingValue(invKey, eq.id, decoder.id);
                        const statusText = decoder.status ? ` (${decoder.status})` : '';
                        const option = document.createElement('option');
                        option.value = value;
                        option.textContent = `${inventory.name} / ${eq.name} / Decoder ${decoder.id}${statusText}`;
                        optionNodes.push(option);
                    });
                }

                if (isServerDecoder(eq)) {
                    (eq.channels || []).forEach(channel => {
                        if (!channel) return;
                        const value = buildChannelRoutingValue(invKey, eq.id, channel.id);
                        const statusText = channel.status ? ` (${channel.status})` : '';
                        const option = document.createElement('option');
                        option.value = value;
                        option.textContent = `${inventory.name} / ${eq.name} / ${channel.id}${statusText}`;
                        optionNodes.push(option);
                    });
                }
            } else {
                if ((eq.type !== 'unit' && eq.type !== 'transceiver') || !Array.isArray(eq.encoders)) return;
                eq.encoders.forEach(enc => {
                    if (!enc) return;
                    const value = buildEncoderRoutingValue(invKey, eq.id, enc.id);
                    const statusText = enc.status ? ` (${enc.status})` : '';
                    const option = document.createElement('option');
                    option.value = value;
                    option.textContent = `${inventory.name} / ${eq.name} / Encoder ${enc.id}${statusText}`;
                    optionNodes.push(option);
                });
            }
        });
    });

    if (optionNodes.length === 0) {
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = allowDecoderTargets ? 'No decoders available' : 'No encoders available';
        emptyOption.disabled = true;
        encoderSelect.appendChild(emptyOption);
    } else {
        optionNodes
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(option => encoderSelect.appendChild(option));
    }

    if (sanitizedSelection && !Array.from(encoderSelect.options).some(opt => opt.value === sanitizedSelection)) {
        const preservedOption = document.createElement('option');
        preservedOption.value = sanitizedSelection;
        preservedOption.textContent = describeRoutingValue(sanitizedSelection) || 'Current target';
        preservedOption.selected = true;
        encoderSelect.appendChild(preservedOption);
    }

    if (sanitizedSelection) {
        encoderSelect.value = sanitizedSelection;
    }
}

function buildEncoderRoutingValue(inventoryKey, equipmentId, encoderId) {
    return `${String(inventoryKey)}:${String(equipmentId)}:encoder:${String(encoderId)}`;
}

function buildChannelRoutingValue(inventoryKey, equipmentId, channelId) {
    return `${String(inventoryKey)}:${String(equipmentId)}:channel:${String(channelId)}`;
}

function isServerDecoder(equipment) {
    if (!equipment || equipment.type !== 'server') return false;
    const product = String(equipment.product || '').toUpperCase();
    return product.startsWith('LU2000');
}

function parseEncoderRoutingValue(value) {
    if (!value || typeof value !== 'string') return null;
    const parts = value.split(':');
    if (parts.length < 4) return null;

    const inventoryKey = parts[0].trim();
    const equipmentId = parts[1].trim();
    const type = parts[2].trim();
    const encoderId = parts.slice(3).join(':').trim();

    if (!inventoryKey || !equipmentId || type.toLowerCase() !== 'encoder' || !encoderId) {
        return null;
    }

    return {
        inventoryKey,
        equipmentId,
        encoderId
    };
}

function isEncoderRoutingString(value) {
    return Boolean(parseEncoderRoutingValue(value));
}

function describeEncoderRoutingValue(value) {
    const parsed = parseEncoderRoutingValue(value);
    if (!parsed) return '';

    const inventory = inventories[parsed.inventoryKey];
    const equipmentList = inventory?.equipment || [];
    const equipment = equipmentList.find(eq => eq && String(eq.id) === parsed.equipmentId);

    const baseInventory = inventory ? inventory.name : parsed.inventoryKey;
    const baseEquipment = equipment ? equipment.name : parsed.equipmentId;

    let encoderLabel = parsed.encoderId;
    if (equipment && Array.isArray(equipment.encoders)) {
        const encoder = equipment.encoders.find(enc => enc && String(enc.id) === parsed.encoderId);
        if (encoder) {
            encoderLabel = `${encoder.id}${encoder.status ? ` (${encoder.status})` : ''}`;
        }
    }

    return `${baseInventory} / ${baseEquipment} / Encoder ${encoderLabel}`;
}

function parseDecoderRoutingValue(value) {
    if (!value || typeof value !== 'string') return null;
    const parts = value.split(':');
    if (parts.length < 4) return null;

    const inventoryKey = parts[0].trim();
    const equipmentId = parts[1].trim();
    const type = parts[2].trim();
    const decoderId = parts.slice(3).join(':').trim();

    if (!inventoryKey || !equipmentId || type.toLowerCase() !== 'decoder' || !decoderId) {
        return null;
    }

    return {
        inventoryKey,
        equipmentId,
        decoderId
    };
}

function isDecoderRoutingString(value) {
    return Boolean(parseDecoderRoutingValue(value));
}

function describeDecoderRoutingValue(value) {
    const parsed = parseDecoderRoutingValue(value);
    if (!parsed) return '';

    const inventory = inventories[parsed.inventoryKey];
    const equipmentList = inventory?.equipment || [];
    const equipment = equipmentList.find(eq => eq && String(eq.id) === parsed.equipmentId);
    const decoders = equipment?.decoders || [];
    const decoder = decoders.find(dec => dec && String(dec.id) === parsed.decoderId);

    const baseInventory = inventory ? inventory.name : parsed.inventoryKey;
    const baseEquipment = equipment ? equipment.name : parsed.equipmentId;
    const decoderLabel = decoder ? `${decoder.id}${decoder.status ? ` (${decoder.status})` : ''}` : parsed.decoderId;

    return `${baseInventory} / ${baseEquipment} / Decoder ${decoderLabel}`;
}

function parseDecoderTargetValue(value) {
    if (!value || typeof value !== 'string') return null;

    const decoderRoute = parseDecoderRoutingValue(value);
    if (decoderRoute) {
        return {
            ...decoderRoute,
            type: 'decoder',
            route: buildDecoderRoutingValue(decoderRoute.inventoryKey, decoderRoute.equipmentId, decoderRoute.decoderId)
        };
    }

    const destinationRoute = parseDestinationValue(value);
    if (destinationRoute && destinationRoute.type === 'channel') {
        const channelName = destinationRoute.channelName || destinationRoute.extra;
        return {
            type: 'channel',
            inventoryKey: destinationRoute.inventoryKey,
            equipmentId: destinationRoute.equipmentId,
            channelName,
            route: buildChannelRoutingValue(destinationRoute.inventoryKey, destinationRoute.equipmentId, channelName)
        };
    }

    return null;
}

function describeDecoderTargetValue(value) {
    const parsed = parseDecoderTargetValue(value);
    if (!parsed) return '';

    if (parsed.type === 'decoder') {
        return describeDecoderRoutingValue(value);
    }

    if (parsed.type === 'channel') {
        const inventory = inventories[parsed.inventoryKey];
        const equipmentList = inventory?.equipment || [];
        const equipment = equipmentList.find(eq => eq && String(eq.id) === parsed.equipmentId);
        if (!equipment) {
            return `${parsed.inventoryKey} / ${parsed.equipmentId} / ${parsed.channelName}`;
        }
        return buildDestinationName(equipment, { channelName: parsed.channelName }) || `${equipment.name} - ${parsed.channelName}`;
    }

    return '';
}

function describeRoutingValue(value) {
    if (isEncoderRoutingString(value)) {
        return describeEncoderRoutingValue(value);
    }
    if (isDecoderRoutingString(value) || parseDecoderTargetValue(value)) {
        return describeDecoderTargetValue(value);
    }
    return '';
}

function getDestinationInputLabel(equipment) {
    if (!equipment) return '';

    const reference = equipment.connectedChannel;
    if (isEncoderRoutingString(reference)) {
        return describeEncoderRoutingValue(reference);
    }
    if (isDecoderRoutingString(reference) || parseDecoderTargetValue(reference)) {
        return describeDecoderTargetValue(reference);
    }

    return reference || '';
}

function isConnectedToStream(equipment) {
    if (!currentInventory || !inventories[currentInventory]) return false;
    
    const allEquipment = inventories[currentInventory].equipment;
    
    // Check if this is a server/destination receiving a stream
    if (equipment.type === 'server') {
        return equipment.channels && equipment.channels.some(ch => ch.status === 'streaming' || ch.status === 'connected');
    } else if (equipment.type === 'destination') {
        // Check if connected to any channel
        return equipment.connectedChannel != null;
    } else if (equipment.type === 'transceiver') {
        return (equipment.encoders && equipment.encoders.some(enc => enc.status === 'streaming' || enc.status === 'connected')) ||
               (equipment.decoders && equipment.decoders.some(dec => dec.status === 'streaming' || dec.status === 'connected'));
    }
    
    return false;
}

// Drag and Drop functionality
function startDrag(e) {
    e.preventDefault();
    const canvas = document.getElementById('mcrCanvas');
    if (!canvas) return;

    draggedElement = e.currentTarget;
    draggedElement.classList.add('dragging');

    const pointer = getCanvasPointer(e);
    const currentLeft = parseFloat(draggedElement.style.left) || 0;
    const currentTop = parseFloat(draggedElement.style.top) || 0;

    dragOffset.x = pointer.x - currentLeft;
    dragOffset.y = pointer.y - currentTop;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
}

function drag(e) {
    if (!draggedElement) return;

    const canvas = document.getElementById('mcrCanvas');
    if (!canvas) return;

    const pointer = getCanvasPointer(e);
    let newX = pointer.x - dragOffset.x;
    let newY = pointer.y - dragOffset.y;

    draggedElement.style.left = `${newX}px`;
    draggedElement.style.top = `${newY}px`;

    const equipmentId = draggedElement.getAttribute('data-id');
    const equipment = inventories[currentInventory].equipment.find(eq => eq.id === equipmentId);
    if (equipment) {
        const minX = parseFloat(canvas.dataset.minX) || 0;
        const minY = parseFloat(canvas.dataset.minY) || 0;
        const margin = parseFloat(canvas.dataset.margin) || 0;
        equipment.x = newX + minX - margin;
        equipment.y = newY + minY - margin;
        draggedElement.dataset.x = equipment.x;
        draggedElement.dataset.y = equipment.y;
    }

    scheduleConnectionRedraw();
}

function endDrag(e) {
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
        draggedElement = null;
        saveInventories();
    }
    
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);
}

function handleCanvasMouseDown(e) {
    if (e.button !== 0) return;
    const canvas = document.getElementById('mcrCanvas');
    if (!canvas) return;
    if (draggedElement) return;
    if (e.target.closest('.equipment-node')) return;
    if (e.target.closest('.canvas-controls')) return;
    e.preventDefault();
    startCanvasPan(e);
}

function startCanvasPan(e) {
    const container = document.getElementById('mcrContainer');
    const canvas = document.getElementById('mcrCanvas');
    if (!container || !canvas) return;
    userAdjustedZoom = true;
    isPanningCanvas = true;
    panStart.x = e.clientX;
    panStart.y = e.clientY;
    panStartTransform = {
        translateX: mcrTransform.translateX,
        translateY: mcrTransform.translateY
    };
    document.body.classList.add('canvas-panning');
    document.addEventListener('mousemove', panCanvas);
    document.addEventListener('mouseup', endCanvasPan);
}

function panCanvas(e) {
    if (!isPanningCanvas) return;
    const scale = mcrTransform.scale || 1;
    const deltaX = (e.clientX - panStart.x) / scale;
    const deltaY = (e.clientY - panStart.y) / scale;
    mcrTransform.translateX = panStartTransform.translateX + deltaX;
    mcrTransform.translateY = panStartTransform.translateY + deltaY;
    updateCanvasTransform();
}

function endCanvasPan() {
    if (!isPanningCanvas) return;
    isPanningCanvas = false;
    document.body.classList.remove('canvas-panning');
    document.removeEventListener('mousemove', panCanvas);
    document.removeEventListener('mouseup', endCanvasPan);
}

function createUnitNodeHTML(equipment) {
    // Determine display status for node
    const displayStatus = determineEquipmentStatus(equipment);
    
    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${displayStatus}">${displayStatus.toUpperCase()}</div>
        </div>
        <div class="node-info">
            Product: ${equipment.product}<br>
            Mode: ${equipment.mode || 'N/A'}<br>
            Uptime: ${equipment.uptime || 'N/A'}
            ${equipment.channel ? `<br><strong>→ ${equipment.channel}</strong>` : ''}
        </div>
    `;
}

function createServerNodeHTML(equipment) {
    // Determine display status for server
    const displayStatus = determineEquipmentStatus(equipment);
    
    const instancesHTML = equipment.instances.map(instance => `
        <div class="instance ${instance.status}" data-instance-name="${escapeAttribute(instance.name)}">
            <span class="connector-anchor input" data-instance-anchor="${escapeAttribute(instance.name)}:input" data-instance-name="${escapeAttribute(instance.name)}" data-anchor-side="input" data-anchor-type="instance"></span>
            <span class="instance-name">${instance.name}</span>
            <span class="instance-status ${instance.status}">${instance.status}</span>
            <span class="connector-anchor output" data-instance-anchor="${escapeAttribute(instance.name)}:output" data-instance-name="${escapeAttribute(instance.name)}" data-anchor-side="output" data-anchor-type="instance"></span>
        </div>
    `).join('');

    return `
        <div class="node-header">
            <div class="node-title">${equipment.name}</div>
            <div class="node-status ${displayStatus}">${displayStatus.toUpperCase()}</div>
        </div>
        <div class="server-instances">
            ${instancesHTML}
        </div>
    `;
}

function createConnectionLine(fromId, toId, options = {}) {
    const fromNode = document.querySelector(`[data-id="${fromId}"]`);
    const toNode = document.querySelector(`[data-id="${toId}"]`);

    if (!fromNode || !toNode) return null;

    const fromAnchor = getAnchorElement(fromNode, options.fromSelector);
    const toAnchor = getAnchorElement(toNode, options.toSelector);

    if (!fromAnchor || !toAnchor) return null;

    const container = document.getElementById('mcrContainer');
    const canvas = document.getElementById('mcrCanvas');
    if (!container || !canvas) return null;

    const containerRect = options.containerRect || container.getBoundingClientRect();
    const canvasRect = options.canvasRect || canvas.getBoundingClientRect();
    const fromRect = fromAnchor.getBoundingClientRect();
    const toRect = toAnchor.getBoundingClientRect();

    const anchorSide = (anchorEl) => {
        if (!anchorEl) return null;
        return (anchorEl.dataset && anchorEl.dataset.anchorSide) || null;
    };

    const fromSide = anchorSide(fromAnchor);
    const toSide = anchorSide(toAnchor);

    const fromX = fromRect.left + fromRect.width / 2 - canvasRect.left;
    const fromY = fromRect.top + fromRect.height / 2 - canvasRect.top;
    const toX = toRect.left + toRect.width / 2 - canvasRect.left;
    const toY = toRect.top + toRect.height / 2 - canvasRect.top;

    const computedFromX = fromSide === 'output'
        ? fromRect.right - canvasRect.left
        : fromSide === 'input'
            ? fromRect.left - canvasRect.left
            : fromX;

    const computedToX = toSide === 'input'
        ? toRect.left - canvasRect.left
        : toSide === 'output'
            ? toRect.right - canvasRect.left
            : toX;

    const finalFromX = Number.isFinite(computedFromX) ? computedFromX : fromX;
    const finalToX = Number.isFinite(computedToX) ? computedToX : toX;

    const fromLocalRect = {
        top: fromRect.top - canvasRect.top,
        bottom: fromRect.bottom - canvasRect.top
    };
    const toLocalRect = {
        top: toRect.top - canvasRect.top,
        bottom: toRect.bottom - canvasRect.top
    };

    const path = createCurvedPath(finalFromX, fromY, finalToX, toY, fromLocalRect, toLocalRect);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.top = `${canvasRect.top - containerRect.top}px`;
    svg.style.left = `${canvasRect.left - containerRect.left}px`;
    svg.style.width = `${canvasRect.width}px`;
    svg.style.height = `${canvasRect.height}px`;
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '1';
    svg.style.overflow = 'visible';
    svg.setAttribute('viewBox', `0 0 ${canvasRect.width} ${canvasRect.height}`);
    svg.setAttribute('preserveAspectRatio', 'none');

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', path);
    pathElement.setAttribute('class', 'connection-line animated');
    if (options.type) {
        pathElement.classList.add(options.type);
    }

    svg.appendChild(pathElement);
    return svg;
}

function getAnchorElement(baseNode, selector) {
    if (!baseNode) return null;
    if (!selector) return baseNode;
    try {
        const element = baseNode.querySelector(selector);
        return element || baseNode;
    } catch (error) {
        return baseNode;
    }
}

function buildAnchorKey(node, selector, defaultSide) {
    if (!node) return null;
    const anchorEl = getAnchorElement(node, selector);
    if (!anchorEl) return null;

    const {
        encoderId,
        channelId,
        instanceName,
        decoderId,
        destinationId,
        ingestId,
        srtId,
        equipmentAnchor,
        anchorType,
        anchorSide
    } = anchorEl.dataset || {};

    const type = anchorType ||
        (encoderId && 'encoder') ||
        (channelId && 'channel') ||
        (instanceName && 'instance') ||
        (decoderId && 'decoder') ||
        (destinationId && 'destination') ||
        (ingestId && 'ingest') ||
        (srtId && 'srt') ||
        'equipment';

    const identifier =
        encoderId ||
        channelId ||
        instanceName ||
        decoderId ||
        destinationId ||
        ingestId ||
        srtId ||
        equipmentAnchor ||
        `${type}:${selector}`;

    const side = anchorSide || defaultSide || 'auto';
    const nodeId = node.getAttribute('data-id') || 'unknown';

    return `${nodeId}::${type}:${identifier}::${side}`;
}

function createCurvedPath(fromX, fromY, toX, toY, fromRect, toRect) {
    const dx = toX - fromX;
    const dy = toY - fromY;

    const baselineOffset = Math.max(Math.abs(dx) * 0.25, 80);
    const direction = dx >= 0 ? 1 : -1;

    const overlapY = (fromRect.bottom > toRect.top && fromRect.top < toRect.bottom);
    const verticalCurve = overlapY
        ? Math.max(120, Math.abs(dy) * 0.6)
        : Math.max(60, Math.abs(dy) * 0.4);
    const curveSign = dy < 0 ? -1 : 1;

    const cp1X = fromX + direction * baselineOffset;
    const cp1Y = fromY + curveSign * verticalCurve;
    const cp2X = toX - direction * baselineOffset;
    const cp2Y = toY - curveSign * verticalCurve;

    return `M ${fromX},${fromY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${toX},${toY}`;
}

function scheduleConnectionRedraw() {
    if (connectionRedrawScheduled) return;
    connectionRedrawScheduled = true;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            connectionRedrawScheduled = false;
            redrawConnections();
        });
    });
}

function redrawConnections() {
    document.querySelectorAll('.connection-line').forEach(line => {
        line.parentElement.remove();
    });

    if (!showConnections || !currentInventory || !inventories[currentInventory]) return;

    const equipment = inventories[currentInventory].equipment;
    const container = document.getElementById('mcrContainer');
    const canvas = document.getElementById('mcrCanvas');
    if (!container || !canvas || !equipment) return;

    const containerRect = container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const controlsOverlay = container.querySelector('.canvas-controls');
    const connectionSet = new Set();

    const addConnection = (fromId, toId, type, anchors = {}) => {
        if (!fromId || !toId || fromId === toId) return;

        const fromNode = document.querySelector(`[data-id="${fromId}"]`);
        const toNode = document.querySelector(`[data-id="${toId}"]`);
        if (!fromNode || !toNode) return;

        const fromKey = buildAnchorKey(fromNode, anchors.fromSelector, 'output');
        const toKey = buildAnchorKey(toNode, anchors.toSelector, 'input');
        if (!fromKey || !toKey) return;

        const pairKey = `${fromKey}=>${toKey}`;
        if (connectionSet.has(pairKey)) return;
        connectionSet.add(pairKey);

        const line = createConnectionLine(fromId, toId, { type, containerRect, canvasRect, ...anchors });
        if (line) {
            if (controlsOverlay) {
                container.insertBefore(line, controlsOverlay);
            } else {
                container.appendChild(line);
            }
        }
    };

    equipment.forEach(item => {
        if (item.type === 'unit') {
            const hasExplicitStreamingEncoder = Array.isArray(item.encoders) && item.encoders.some(enc => enc && enc.status === 'streaming' && enc.channel);

            if (!hasExplicitStreamingEncoder && item.status === 'streaming' && item.channel) {
                const target = findStreamingTarget(item.channel, equipment);
                if (target && target.equipment) {
                    addConnection(item.id, target.equipment.id, 'streaming', {
                        fromSelector: findStreamingEncoderSelector(item, item.channel),
                        toSelector: getMatchSelector(target, 'input')
                    });
                }
            }

            (item.encoders || []).forEach(encoder => {
                if (!encoder || !encoder.channel) return;
                const target = resolveChannelTarget(encoder.channel, equipment, { preferDownstream: true });
                if (!target || !target.equipment || target.equipment.id === item.id) return;
                const connectionType = encoder.status === 'streaming' ? 'streaming' : encoder.status === 'connected' ? 'idle' : null;
                if (!connectionType) return;
                addConnection(item.id, target.equipment.id, connectionType, {
                    fromSelector: buildEncoderSelector(encoder.id, 'output'),
                    toSelector: getMatchSelector(target, 'input')
                });
            });
        }

        if (item.type === 'server') {
            (item.channels || []).forEach(channel => {
                if (!channel) return;

                if (channel.connectedUnit) {
                    const unit = equipment.find(eq => eq.id === channel.connectedUnit);
                    if (unit && unit.id !== item.id) {
                        const connectionType = channel.status === 'streaming' ? 'streaming' : channel.status === 'connected' ? 'idle' : null;
                        if (connectionType) {
                            addConnection(unit.id, item.id, connectionType, {
                                fromSelector: findStreamingEncoderSelector(unit, channel.id),
                                toSelector: buildChannelSelector(channel.id, 'input')
                            });
                        }
                    }
                }

                const channelTarget = resolveChannelTarget(channel.id, equipment, {
                    excludeIds: [item.id],
                    preferDownstream: true
                });
                if (channelTarget && channelTarget.equipment && channelTarget.equipment.id !== item.id) {
                    const connectionType = channel.status === 'streaming' ? 'streaming' : channel.status === 'connected' ? 'idle' : null;
                    if (connectionType) {
                        addConnection(item.id, channelTarget.equipment.id, connectionType, {
                            fromSelector: buildChannelSelector(channel.id, 'output'),
                            toSelector: getMatchSelector(channelTarget, 'input')
                        });
                    }
                }
            });

            (item.instances || []).forEach(instance => {
                if (!instance || !instance.name) return;
                const instanceTarget = resolveChannelTarget(instance.name, equipment, {
                    excludeIds: [item.id],
                    preferDownstream: true
                });
                if (instanceTarget && instanceTarget.equipment && instanceTarget.equipment.id !== item.id && instance.status === 'streaming') {
                    addConnection(item.id, instanceTarget.equipment.id, 'streaming', {
                        fromSelector: buildInstanceSelector(instance.name, 'output'),
                        toSelector: getMatchSelector(instanceTarget, 'input')
                    });
                }
            });
        }

        if (item.type === 'destination' && item.connectedChannel) {
            const upstream = resolveChannelTarget(item.connectedChannel, equipment, {
                excludeIds: [item.id],
                preferDownstream: false
            });
            if (upstream && upstream.equipment && upstream.equipment.id !== item.id) {
                addConnection(upstream.equipment.id, item.id, 'streaming', {
                    fromSelector: getMatchSelector(upstream, 'output'),
                    toSelector: buildDestinationSelector(item.id, 'input')
                });
            }
        }

        if (item.type === 'ingest') {
            (item.associatedChannels || []).forEach(channelRef => {
                const ingestSource = resolveChannelTarget(channelRef, equipment, {
                    excludeIds: [item.id],
                    preferDownstream: false
                });
                if (ingestSource && ingestSource.equipment && ingestSource.equipment.id !== item.id) {
                    addConnection(ingestSource.equipment.id, item.id, 'idle', {
                        fromSelector: getMatchSelector(ingestSource, 'output'),
                        toSelector: buildIngestSelector(item.id, 'input')
                    });
                }
            });
        }

        if (item.type === 'srt-in') {
            const channelInfo = item.channel || {};
            const sourceId = channelInfo.source;
            if (sourceId) {
                const sourceEquipment = equipment.find(eq => eq.id === sourceId);
                if (sourceEquipment) {
                    const status = channelInfo.status === 'streaming' ? 'streaming' : 'idle';
                    addConnection(sourceEquipment.id, item.id, status, {
                        fromSelector: buildEquipmentSelector(sourceEquipment.id, 'output'),
                        toSelector: buildSrtSelector(item.id, 'input')
                    });
                }
            }
        }
    });
}

function findStreamingTarget(channelName, equipment) {
    return resolveChannelTarget(channelName, equipment, { preferDownstream: true });
}

function resolveChannelTarget(channelRef, equipment, options = {}) {
    if (!channelRef) return null;

    const normalized = String(channelRef).trim();
    const normalizedLower = normalized.toLowerCase();
    const normalizedTail = normalizedLower.split(' - ').pop();
    const excludeIds = new Set((options.excludeIds || []).map(id => String(id)));
    const preferDownstream = Boolean(options.preferDownstream);
    const parsedEncoderRef = parseEncoderRoutingValue(normalized);
    const encoderRefLower = parsedEncoderRef
        ? {
            inventoryKey: parsedEncoderRef.inventoryKey.toLowerCase(),
            equipmentId: parsedEncoderRef.equipmentId.toLowerCase(),
            encoderId: parsedEncoderRef.encoderId.toLowerCase()
        }
        : null;
    const parsedDecoderRef = parseDecoderRoutingValue(normalized);
    const decoderRefLower = parsedDecoderRef
        ? {
            inventoryKey: parsedDecoderRef.inventoryKey.toLowerCase(),
            equipmentId: parsedDecoderRef.equipmentId.toLowerCase(),
            decoderId: parsedDecoderRef.decoderId.toLowerCase()
        }
        : null;
    const decoderTarget = parseDecoderTargetValue(normalized);
    const decoderChannelTarget = decoderTarget && decoderTarget.type === 'channel'
        ? {
            equipmentId: String(decoderTarget.equipmentId).toLowerCase(),
            channelName: String(decoderTarget.channelName).toLowerCase()
        }
        : null;

    const matches = [];

    const recordMatch = (equipmentRef, via, priority, extras = {}) => {
        if (!equipmentRef) return;
        if (excludeIds.has(String(equipmentRef.id))) return;
        matches.push({ equipment: equipmentRef, via, priority, ...extras });
    };

    equipment.forEach(eq => {
        if (!eq || !eq.type) return;
        const eqId = String(eq.id);
        if (excludeIds.has(eqId)) return;

        if (encoderRefLower && String(eq.id).toLowerCase() === encoderRefLower.equipmentId) {
            const encoders = Array.isArray(eq.encoders) ? eq.encoders : [];
            const encoder = encoders.find(enc => enc && String(enc.id).toLowerCase() === encoderRefLower.encoderId);
            if (encoder) {
                const selector = encoder.id != null ? buildEncoderSelector(encoder.id, 'output') : null;
                recordMatch(eq, `${eq.type}-encoder-ref`, 0, {
                    encoderId: encoder.id,
                    selector,
                    selectors: {
                        output: buildEncoderSelector(encoder.id, 'output')
                    },
                    channelName: encoder.channel || null
                });
            }
        }

        if (decoderRefLower && String(eq.id).toLowerCase() === decoderRefLower.equipmentId) {
            const decoders = Array.isArray(eq.decoders) ? eq.decoders : [];
            const decoder = decoders.find(dec => dec && String(dec.id).toLowerCase() === decoderRefLower.decoderId);
            if (decoder) {
                recordMatch(eq, `${eq.type}-decoder-ref`, preferDownstream ? 0 : 2, {
                    decoderId: decoder.id,
                    selector: buildDecoderSelector(decoder.id, 'input'),
                    selectors: {
                        input: buildDecoderSelector(decoder.id, 'input'),
                        output: buildDecoderSelector(decoder.id, 'output')
                    }
                });
            }
        }

        if (decoderChannelTarget && eqId === decoderChannelTarget.equipmentId && Array.isArray(eq.channels) && isServerDecoder(eq)) {
            const matchedChannel = eq.channels.find(ch => ch && String(ch.id).toLowerCase() === decoderChannelTarget.channelName);
            if (matchedChannel) {
                recordMatch(eq, 'server-channel-target', preferDownstream ? 0 : 2, {
                    channelName: matchedChannel.id,
                    selector: buildChannelSelector(matchedChannel.id, 'input'),
                    selectors: {
                        input: buildChannelSelector(matchedChannel.id, 'input'),
                        output: buildChannelSelector(matchedChannel.id, 'output')
                    }
                });
            }
        }

        if (eq.type === 'server') {
            const matchedChannel = eq.channels?.find(ch => {
                const channelId = String(ch.id).toLowerCase();
                return channelId === normalizedLower || channelId === normalizedTail;
            });
            if (matchedChannel) {
                const channelName = matchedChannel.id;
                recordMatch(eq, 'server-channel', preferDownstream ? 0 : 3, {
                    channelName,
                    selector: buildChannelSelector(channelName, 'input'),
                    selectors: {
                        input: buildChannelSelector(channelName, 'input'),
                        output: buildChannelSelector(channelName, 'output')
                    }
                });
            }

            const matchedInstance = eq.instances?.find(inst => {
                const instanceName = String(inst.name).toLowerCase();
                return instanceName === normalizedLower || instanceName === normalizedTail;
            });
            if (matchedInstance) {
                recordMatch(eq, 'server-instance', preferDownstream ? 1 : 4, {
                    instanceName: matchedInstance.name,
                    selector: buildInstanceSelector(matchedInstance.name, 'output'),
                    selectors: {
                        input: buildInstanceSelector(matchedInstance.name, 'input'),
                        output: buildInstanceSelector(matchedInstance.name, 'output')
                    }
                });
            }
        }

        if ((eq.type === 'unit' || eq.type === 'transceiver') && Array.isArray(eq.encoders)) {
            eq.encoders.forEach(enc => {
                if (!enc) return;
                const encoderIdText = enc.id != null ? String(enc.id) : '';
                const channelName = enc.channel ? String(enc.channel).toLowerCase() : '';
                const encoderLabel = encoderIdText ? `encoder ${encoderIdText}`.toLowerCase() : '';
                const encoderShortLabel = encoderIdText ? `enc ${encoderIdText}`.toLowerCase() : '';
                const matchesChannel = channelName && (channelName === normalizedLower || channelName === normalizedTail);
                const matchesLabel = encoderLabel && (encoderLabel === normalizedLower || encoderLabel === normalizedTail);
                const matchesShortLabel = encoderShortLabel && (encoderShortLabel === normalizedLower || encoderShortLabel === normalizedTail);

                if (matchesChannel || matchesLabel || matchesShortLabel) {
                    const priority = preferDownstream ? 6 : 1;
                    const selector = enc.id != null ? buildEncoderSelector(enc.id, 'output') : null;
                    recordMatch(eq, `${eq.type}-encoder`, priority, {
                        encoderId: enc.id,
                        selector,
                        selectors: {
                            output: buildEncoderSelector(enc.id, 'output')
                        },
                        channelName: enc.channel
                    });
                }
            });
        }

        if (eq.type === 'transceiver' && Array.isArray(eq.decoders)) {
            eq.decoders.forEach(dec => {
                if (!dec) return;
                const decoderIdText = dec.id != null ? String(dec.id).toLowerCase() : '';
                if (!decoderIdText) return;
                if (decoderIdText === normalizedLower || decoderIdText === normalizedTail) {
                    recordMatch(eq, 'transceiver-decoder', preferDownstream ? 0 : 2, {
                        decoderId: dec.id,
                        selector: buildDecoderSelector(dec.id, 'input'),
                        selectors: {
                            input: buildDecoderSelector(dec.id, 'input'),
                            output: buildDecoderSelector(dec.id, 'output')
                        }
                    });
                }
            });
        }

        if (eq.type === 'destination') {
            const connectedMatch = eq.connectedChannel && String(eq.connectedChannel).toLowerCase();
            const streamNameMatch = eq.streamName && eq.streamName.toLowerCase();
            const nameMatch = eq.name && eq.name.toLowerCase();
            if (
                (connectedMatch === normalizedLower || connectedMatch === normalizedTail) ||
                (streamNameMatch === normalizedLower || streamNameMatch === normalizedTail) ||
                (nameMatch === normalizedLower || nameMatch === normalizedTail)
            ) {
                recordMatch(eq, 'destination', preferDownstream ? 3 : 0, {
                    selector: buildDestinationSelector(eq.id, 'input'),
                    selectors: {
                        input: buildDestinationSelector(eq.id, 'input'),
                        output: buildDestinationSelector(eq.id, 'output')
                    }
                });
            }
        }

        if (eq.type === 'ingest') {
            const hasAssociation = eq.associatedChannels?.some(ch => {
                const id = String(ch).toLowerCase();
                return id === normalizedLower || id === normalizedTail;
            });
            if (hasAssociation) {
                recordMatch(eq, 'ingest', preferDownstream ? 2 : 3, {
                    selector: buildIngestSelector(eq.id, 'input'),
                    selectors: {
                        input: buildIngestSelector(eq.id, 'input'),
                        output: buildIngestSelector(eq.id, 'output')
                    }
                });
            }
        }

        if (eq.type === 'srt-in') {
            const outputMatch = eq.channel?.outputChannel && String(eq.channel.outputChannel).toLowerCase();
            const nameMatch = eq.name && eq.name.toLowerCase();
            if (
                (outputMatch === normalizedLower || outputMatch === normalizedTail) ||
                (nameMatch === normalizedLower || nameMatch === normalizedTail)
            ) {
                recordMatch(eq, 'srt-in', preferDownstream ? 3 : 4, {
                    selector: buildSrtSelector(eq.id, 'input'),
                    selectors: {
                        input: buildSrtSelector(eq.id, 'input'),
                        output: buildSrtSelector(eq.id, 'output')
                    }
                });
            }
        }
    });

    if (matches.length === 0) return null;

    matches.sort((a, b) => a.priority - b.priority);
    return matches[0];
}

function getMatchSelector(match, side = 'input') {
    if (!match) return null;
    const selectors = match.selectors || {};
    if (side === 'output') {
        return selectors.output || match.selector || (match.equipment ? buildEquipmentSelector(match.equipment.id, 'output') : null);
    }
    if (side === 'input') {
        return selectors.input || match.selector || (match.equipment ? buildEquipmentSelector(match.equipment.id, 'input') : null);
    }
    return match.selector || (match.equipment ? buildEquipmentSelector(match.equipment.id) : null);
}

function findStreamingEncoderSelector(unit, channelRef) {
    if (!unit || !unit.encoders) return null;
    const matching = unit.encoders.find(enc => {
        if (!enc) return false;
        if (enc.status === 'streaming') return true;
        if (!channelRef || !enc.channel) return false;
        return String(enc.channel).toLowerCase() === String(channelRef).toLowerCase();
    });
    if (matching) return buildEncoderSelector(matching.id, 'output');

    const streaming = unit.encoders.find(enc => enc && enc.status === 'streaming');
    if (streaming) return buildEncoderSelector(streaming.id, 'output');

    const first = unit.encoders[0];
    return first ? buildEncoderSelector(first.id, 'output') : null;
}

function selectEquipment(equipment) {
    showAlert(`Selected: ${equipment.name} (${equipment.status})`, 'info');
    
    // Highlight selected
    document.querySelectorAll('.equipment-node').forEach(node => {
        node.style.transform = '';
        node.style.zIndex = '';
    });
    
    const node = document.querySelector(`[data-id="${equipment.id}"]`);
    if (node) {
        node.style.transform = 'scale(1.1)';
        node.style.zIndex = '200';
    }
}

function updateStats() {
    if (!currentInventory || !inventories[currentInventory]) {
        animateMetric('onlineCount', 0, { suffix: 'Online' });
        animateMetric('streamingCount', 0, { suffix: 'Streaming Encoders' });
        animateMetric('offlineCount', 0, { suffix: 'Offline' });
        animateMetric('totalEquipment', 0);
        animateMetric('activeStreams', 0);
        return;
    }

    const equipment = inventories[currentInventory].equipment;
    let online = 0, offline = 0, streamingEncoders = 0, totalStreams = 0;
    
    equipment.forEach(eq => {
        const status = determineEquipmentStatus(eq);
        if (status === 'online') online++;
        else if (status === 'offline') offline++;
        else if (status === 'connected') online++; // Count connected as online

        // Count active streaming encoders
        const encoders = Array.isArray(eq.encoders) ? eq.encoders : null;
        let encoderStreams = 0;
        if (encoders && encoders.length > 0) {
            encoderStreams = encoders.filter(enc => enc.status === 'streaming').length;
        }
        if (eq.type === 'unit' && encoderStreams === 0) {
            const hasStreamingIndicator = status === 'streaming' ||
                (typeof eq.status === 'string' && eq.status.toLowerCase() === 'streaming') ||
                Boolean(eq.channel);
            if (hasStreamingIndicator) {
                encoderStreams = 1;
            }
        }
        streamingEncoders += encoderStreams;
        
        // Count active streams
        if (eq.type === 'unit') {
            let count = eq.encoders ? eq.encoders.filter(enc => enc.status === 'streaming').length : 0;
            if (count === 0 && (eq.status === 'streaming' || eq.channel)) {
                count = 1;
            }
            totalStreams += count;
        } else if (eq.type === 'server') {
            let count = eq.channels ? eq.channels.filter(ch => ch.status === 'streaming').length : 0;
            if (count === 0 && eq.status === 'streaming') {
                count = 1;
            }
            totalStreams += count;
        } else if (eq.type === 'transceiver') {
            let count = 0;
            if (eq.encoders) count += eq.encoders.filter(enc => enc.status === 'streaming').length;
            if (eq.decoders) count += eq.decoders.filter(dec => dec.status === 'streaming').length;
            if (count === 0 && eq.status === 'streaming') {
                count = 1;
            }
            totalStreams += count;
        } else if (eq.type === 'destination') {
            if (eq.connectedChannel || eq.status === 'streaming') {
                totalStreams += 1;
            }
        } else if (eq.type === 'ingest') {
            if ((eq.activeRecordings?.length || 0) > 0 || eq.status === 'streaming') {
                totalStreams += Math.max(1, eq.activeRecordings?.length || 0);
            }
        } else if (eq.type === 'srt-in') {
            const channelStatus = (eq.channel?.status || '').toLowerCase();
            if (channelStatus === 'streaming' || eq.status === 'streaming') {
                totalStreams += 1;
            }
        } else if (eq.status === 'streaming') {
            totalStreams += 1;
        }
    });

    animateMetric('onlineCount', online, { suffix: 'Online' });
    animateMetric('streamingCount', streamingEncoders, { suffix: 'Streaming Encoders' });
    animateMetric('offlineCount', offline, { suffix: 'Offline' });
    animateMetric('totalEquipment', equipment.length);
    animateMetric('activeStreams', totalStreams);
}

// Equipment Management
function submitEquipmentForm() {
    const nameInput = document.getElementById('equipmentName');
    const typeSelect = document.getElementById('equipmentType');
    const statusSelect = document.getElementById('equipmentStatus');
    const inventorySelect = document.getElementById('equipmentInventory');
    const modeSelect = document.getElementById('transceiverMode');
    const encoderSelect = document.getElementById('destinationEncoder');

    const name = nameInput ? nameInput.value.trim() : '';
    const type = typeSelect ? typeSelect.value : '';
    const status = statusSelect ? statusSelect.value : 'online';
    const inventoryKey = inventorySelect ? inventorySelect.value : '';
    const encoderValue = encoderSelect ? encoderSelect.value : '';

    if (!name || !inventoryKey) {
        showAlert('Please fill in all required fields', 'error');
        return;
    }

    if (!inventories[inventoryKey]) {
        showAlert('Selected inventory not found', 'error');
        return;
    }

    if (editingEquipment) {
        const { inventoryKey: originalInventoryKey, equipmentId } = editingEquipment;
        const sourceInventory = inventories[originalInventoryKey];
        if (!sourceInventory) {
            showAlert('Original inventory not found', 'error');
            resetEquipmentForm();
            return;
        }

        const equipmentIndex = sourceInventory.equipment.findIndex(eq => eq.id === equipmentId);
        if (equipmentIndex === -1) {
            showAlert('Equipment not found', 'error');
            resetEquipmentForm();
            return;
        }

        const existingEquipment = sourceInventory.equipment[equipmentIndex];
        const typeChanged = existingEquipment.product !== type;
        let updatedEquipment;

        if (typeChanged) {
            updatedEquipment = createNewEquipment(type, name, status, inventoryKey);
            updatedEquipment.id = existingEquipment.id;
            updatedEquipment.x = existingEquipment.x;
            updatedEquipment.y = existingEquipment.y;
        } else {
            updatedEquipment = {
                ...existingEquipment,
                name,
                status,
                product: type
            };
        }

        if (updatedEquipment.type === 'transceiver') {
            applyTransceiverMode(updatedEquipment, modeSelect ? modeSelect.value : '');
        }

        if (updatedEquipment.type === 'destination' || updatedEquipment.type === 'unit') {
            applyDestinationEncoderSelection(updatedEquipment, encoderValue);
        }

        if (inventoryKey === originalInventoryKey) {
            sourceInventory.equipment[equipmentIndex] = updatedEquipment;
        } else {
            sourceInventory.equipment.splice(equipmentIndex, 1);
            inventories[inventoryKey].equipment.push(updatedEquipment);
        }

        enforceChannelStreamingConsistency();
        saveInventories();
        resetEquipmentForm();
        updateScriptEventDropdown();
        selectInventory(true, inventoryKey);
        showAlert('Equipment updated', 'success');
    } else {
        const newEquipment = createNewEquipment(type, name, status, inventoryKey);
        if (newEquipment.type === 'transceiver') {
            applyTransceiverMode(newEquipment, modeSelect ? modeSelect.value : '');
        }

        if (newEquipment.type === 'destination' || newEquipment.type === 'unit') {
            applyDestinationEncoderSelection(newEquipment, encoderValue);
        }

        inventories[inventoryKey].equipment.push(newEquipment);
        enforceChannelStreamingConsistency();
        saveInventories();
        resetEquipmentForm();
        updateScriptEventDropdown();
        selectInventory(true, inventoryKey);
        showAlert(`Added equipment: ${name}`, 'success');
    }
}

function createNewEquipment(type, name, status, inventory) {
    const baseEquipment = {
        id: `${inventory}-${Date.now()}`,
        name: name,
        product: type,
        status: status,
        x: Math.random() * 600 + 100,
        y: Math.random() * 400 + 100
    };

    // Add type-specific properties
    if (ENTITY_TYPES.units[type]) {
        const unitDef = ENTITY_TYPES.units[type];
        return {
            ...baseEquipment,
            type: 'unit',
            mode: '1080p50',
            uptime: '0h 0m',
            encoders: Array.from({length: unitDef.encoders}, (_, i) => ({
                id: i + 1,
                status: 'idle',
                channel: null
            })),
            bandwidth: { current: 0, max: 8000 },
            alerts: []
        };
    } else if (ENTITY_TYPES.servers[type]) {
        const serverDef = ENTITY_TYPES.servers[type];
        if (type === 'Ingest') {
            return {
                ...baseEquipment,
                type: 'ingest',
                associatedChannels: [],
                diskSpace: { used: 0, total: 5000 },
                activeRecordings: []
            };
        } else if (type === 'SRT-In') {
            return {
                ...baseEquipment,
                type: 'srt-in',
                channel: { status: 'idle', source: null, outputChannel: null },
                acceptedFormats: ['SRT', 'RTMP']
            };
        } else {
            return {
                ...baseEquipment,
                type: 'server',
                channels: Array.from({length: serverDef.channels}, (_, i) => ({
                    id: `Channel-${i + 1}`,
                    status: 'idle',
                    connectedUnit: null,
                    recording: null
                })),
                ingestAssociation: null
            };
        }
    } else if (type === 'Transceiver') {
        const mode = document.getElementById('transceiverMode').value;
        const modeMatch = mode.match(/(\d+)e(\d+)d/i);
        const encoderCount = modeMatch ? parseInt(modeMatch[1], 10) : 0;
        const decoderCount = modeMatch ? parseInt(modeMatch[2], 10) : 0;
        
        return {
            ...baseEquipment,
            type: 'transceiver',
            config: { encoders: encoderCount, decoders: decoderCount },
            encoders: Array.from({length: encoderCount}, (_, i) => ({
                id: i + 1,
                status: 'idle',
                channel: null
            })),
            decoders: Array.from({length: decoderCount}, (_, i) => ({
                id: i + 1,
                status: 'idle',
                connectedUnit: null
            }))
        };
    } else if (ENTITY_TYPES.destinations[type]) {
        const destinationDefinition = ENTITY_TYPES.destinations[type];
        const destinationEquipment = {
            ...baseEquipment,
            type: 'destination',
            connectedChannel: null
        };

        if (destinationDefinition?.hardware) {
            destinationEquipment.hardware = destinationDefinition.hardware;
        }

        if (destinationDefinition?.acceptsEncoders) {
            destinationEquipment.supportsEncoderInput = true;
        }

        if (type === 'NDI') {
            destinationEquipment.streamName = `${name}-Stream`;
        }

        return destinationEquipment;
    }

    return baseEquipment;
}

function applyDestinationEncoderSelection(equipment, encoderValue) {
    if (!equipment) return;

    if (equipment.type === 'unit') {
        applyUnitDecoderSelection(equipment, encoderValue);
        return;
    }

    if (equipment.type !== 'destination') return;

    const destinationDefinition = ENTITY_TYPES.destinations[equipment.product];
    const supportsEncoders = Boolean(destinationDefinition && destinationDefinition.acceptsEncoders);
    if (supportsEncoders) {
        equipment.supportsEncoderInput = true;
    } else {
        delete equipment.supportsEncoderInput;
    }

    if (!supportsEncoders) {
        if (isEncoderRoutingString(equipment.connectedChannel)) {
            equipment.connectedChannel = null;
        }
        return;
    }

    const decoderTarget = parseDecoderTargetValue(encoderValue);
    if (decoderTarget) {
        if (decoderTarget.type === 'decoder') {
            equipment.connectedChannel = buildDecoderRoutingValue(decoderTarget.inventoryKey, decoderTarget.equipmentId, decoderTarget.decoderId);
        } else if (decoderTarget.type === 'channel') {
            equipment.connectedChannel = buildChannelRoutingValue(decoderTarget.inventoryKey, decoderTarget.equipmentId, decoderTarget.channelName);
        }
        return;
    }

    const parsedEncoder = parseEncoderRoutingValue(encoderValue);
    if (parsedEncoder) {
        equipment.connectedChannel = buildEncoderRoutingValue(parsedEncoder.inventoryKey, parsedEncoder.equipmentId, parsedEncoder.encoderId);
        return;
    }

    if (isEncoderRoutingString(equipment.connectedChannel) || isDecoderTargetString(equipment.connectedChannel)) {
        equipment.connectedChannel = null;
    }
}

function applyUnitDecoderSelection(unit, targetValue) {
    if (!unit || unit.type !== 'unit') return;

    releaseUnitDecoderRoute(unit);

    const target = parseDecoderTargetValue(targetValue);
    if (!target) {
        if (isDecoderTargetString(unit.channel)) {
            delete unit.channel;
        }
        unit.status = unit.status === 'streaming' ? 'online' : unit.status;
        if (Array.isArray(unit.encoders)) {
            unit.encoders = unit.encoders.map(enc => ({
                ...enc,
                status: enc.status === 'streaming' ? 'idle' : enc.status,
                channel: isDecoderTargetString(enc.channel) ? null : enc.channel
            }));
        }
        return;
    }

    const route = target.route;
    unit.channel = route;
    unit.status = 'streaming';

    if (Array.isArray(unit.encoders)) {
        let primaryIndex = unit.encoders.findIndex(enc => enc && enc.status === 'streaming');
        if (primaryIndex === -1) {
            primaryIndex = 0;
        }
        unit.encoders = unit.encoders.map((enc, index) => {
            if (!enc) return enc;
            if (index === primaryIndex) {
                return {
                    ...enc,
                    status: 'streaming',
                    channel: route
                };
            }
            const updatedStatus = enc.status === 'streaming' ? 'connected' : enc.status;
            return {
                ...enc,
                status: updatedStatus,
                channel: enc.channel === route ? null : enc.channel
            };
        });
    }

    assignUnitDecoderRoute(unit, target);
}

function isDecoderTargetString(value) {
    return Boolean(parseDecoderTargetValue(value));
}

function releaseUnitDecoderRoute(unit) {
    if (!unit) return;
    const current = parseDecoderTargetValue(unit.channel);
    if (!current) return;

    const inventory = inventories[current.inventoryKey];
    const equipment = inventory?.equipment?.find(eq => eq.id === current.equipmentId);
    if (!equipment) return;

    if (current.type === 'channel') {
        const channel = equipment.channels?.find(ch => ch && String(ch.id) === String(current.channelName));
        if (channel) {
            if (channel.connectedUnit === unit.id) {
                channel.connectedUnit = null;
            }
            if (channel.status === 'streaming') {
                channel.status = 'idle';
            }
        }
    } else if (current.type === 'decoder') {
        const decoder = equipment.decoders?.find(dec => dec && String(dec.id) === String(current.decoderId));
        if (decoder) {
            if (decoder.connectedUnit === unit.id) {
                decoder.connectedUnit = null;
            }
            if (decoder.status === 'streaming') {
                decoder.status = 'idle';
            }
        }
    }
}

function assignUnitDecoderRoute(unit, target) {
    if (!unit || !target) return;

    const inventory = inventories[target.inventoryKey];
    const equipment = inventory?.equipment?.find(eq => eq.id === target.equipmentId);
    if (!equipment) return;

    if (target.type === 'channel') {
        const channel = equipment.channels?.find(ch => ch && String(ch.id) === String(target.channelName));
        if (channel) {
            channel.status = 'streaming';
            channel.connectedUnit = unit.id;
        }
    } else if (target.type === 'decoder') {
        const decoder = equipment.decoders?.find(dec => dec && String(dec.id) === String(target.decoderId));
        if (decoder) {
            decoder.status = 'streaming';
            decoder.connectedUnit = unit.id;
        }
    }
}

function updateEquipmentList() {
    const container = document.getElementById('equipmentList');
    if (!container) return;

    container.innerHTML = '';

    if (!currentInventory || !inventories[currentInventory]) {
        container.innerHTML = '<div class="equipment-empty-state">Select an inventory above to view and edit equipment.</div>';
        return;
    }

    const equipmentItems = inventories[currentInventory].equipment || [];
    if (equipmentItems.length === 0) {
        container.innerHTML = '<div class="equipment-empty-state">No equipment in this inventory yet.</div>';
        return;
    }

    equipmentItems.forEach(equipment => {
        const card = createEquipmentCard(equipment, currentInventory);
        container.appendChild(card);
    });
}

function createEquipmentCard(equipment, inventoryKey) {
    const card = document.createElement('div');
    card.className = 'equipment-card';
    const displayStatus = determineEquipmentStatus(equipment);
    const statusLabel = displayStatus ? displayStatus.charAt(0).toUpperCase() + displayStatus.slice(1) : 'Unknown';

    if (editingEquipment && editingEquipment.inventoryKey === inventoryKey && editingEquipment.equipmentId === equipment.id) {
        card.classList.add('is-editing');
    }
    
    card.innerHTML = `
        <div class="equipment-card-header">
            <div class="equipment-name">${equipment.name}</div>
            <div class="equipment-status ${displayStatus}">${statusLabel}</div>
        </div>
        <div class="equipment-details">
            Product: ${equipment.product}<br>
            Inventory: ${inventories[inventoryKey].name}<br>
            Type: ${equipment.type}
            ${equipment.mode ? `<br>Mode: ${equipment.mode}` : ''}
            ${equipment.type === 'transceiver' && equipment.config ? `<br>Config: ${equipment.config.encoders} Enc / ${equipment.config.decoders} Dec` : ''}
            ${equipment.type === 'destination' && getDestinationInputLabel(equipment) ? `<br>Input: ${getDestinationInputLabel(equipment)}` : ''}
        </div>
        <div class="equipment-actions">
            <button class="btn btn-small" onclick="startEditEquipment('${inventoryKey}', '${equipment.id}')">
                Edit
            </button>
            <button class="btn btn-small btn-danger" onclick="removeEquipment('${inventoryKey}', '${equipment.id}')">
                Remove
            </button>
        </div>
    `;
    
    return card;
}

function startEditEquipment(inventoryKey, equipmentId) {
    const inventory = inventories[inventoryKey];
    if (!inventory) {
        showAlert('Inventory not found', 'error');
        return;
    }

    const equipment = inventory.equipment.find(eq => eq.id === equipmentId);
    if (!equipment) {
        showAlert('Equipment not found', 'error');
        return;
    }

    editingEquipment = { inventoryKey, equipmentId };

    const formTitle = document.getElementById('equipmentFormTitle');
    if (formTitle) {
        formTitle.textContent = 'Edit Equipment';
    }

    const submitBtn = document.getElementById('equipmentSubmitBtn');
    if (submitBtn) {
        submitBtn.textContent = 'Save Changes';
    }

    const cancelBtn = document.getElementById('equipmentCancelBtn');
    if (cancelBtn) {
        cancelBtn.style.display = '';
    }

    const nameInput = document.getElementById('equipmentName');
    if (nameInput) {
        nameInput.value = equipment.name || '';
    }

    const typeSelect = document.getElementById('equipmentType');
    if (typeSelect) {
        const optionExists = Array.from(typeSelect.options).some(opt => opt.value === equipment.product);
        typeSelect.value = optionExists ? equipment.product : typeSelect.options[0]?.value || '';
    }

    updateEquipmentForm();

    const statusSelect = document.getElementById('equipmentStatus');
    if (statusSelect) {
        statusSelect.value = equipment.status || 'online';
    }

    const inventorySelect = document.getElementById('equipmentInventory');
    if (inventorySelect) {
        inventorySelect.value = inventoryKey;
    }

    if (equipment.type === 'transceiver') {
        const modeSelect = document.getElementById('transceiverMode');
        if (modeSelect) {
            const modeValue = `${equipment.config?.encoders ?? 0}e${equipment.config?.decoders ?? 0}d`;
            const optionExists = Array.from(modeSelect.options).some(opt => opt.value === modeValue);
            modeSelect.value = optionExists ? modeValue : modeSelect.options[0]?.value || modeSelect.value;
        }
    }

    updateEquipmentForm();
    updateEquipmentList();
    showAlert(`Editing: ${equipment.name}`, 'info');
}

function cancelEditEquipment() {
    if (!editingEquipment) {
        resetEquipmentForm();
        return;
    }
    resetEquipmentForm();
    updateEquipmentList();
    showAlert('Edit cancelled', 'info');
}

function resetEquipmentForm() {
    editingEquipment = null;

    const formTitle = document.getElementById('equipmentFormTitle');
    if (formTitle) {
        formTitle.textContent = 'Add New Equipment';
    }

    const submitBtn = document.getElementById('equipmentSubmitBtn');
    if (submitBtn) {
        submitBtn.textContent = 'Add Equipment';
    }

    const cancelBtn = document.getElementById('equipmentCancelBtn');
    if (cancelBtn) {
        cancelBtn.style.display = 'none';
    }

    const nameInput = document.getElementById('equipmentName');
    if (nameInput) {
        nameInput.value = '';
    }

    const typeSelect = document.getElementById('equipmentType');
    if (typeSelect) {
        typeSelect.selectedIndex = 0;
    }

    updateEquipmentForm();

    const statusSelect = document.getElementById('equipmentStatus');
    if (statusSelect) {
        statusSelect.value = 'online';
    }

    const inventorySelect = document.getElementById('equipmentInventory');
    if (inventorySelect) {
        if (currentInventory && inventories[currentInventory]) {
            inventorySelect.value = currentInventory;
        } else {
            inventorySelect.value = '';
        }
    }
}

function applyTransceiverMode(equipment, modeValue) {
    if (!equipment || equipment.type !== 'transceiver') return;

    const match = modeValue ? modeValue.match(/(\d+)e(\d+)d/i) : null;
    const encoderCount = match ? parseInt(match[1], 10) : equipment.config?.encoders || 0;
    const decoderCount = match ? parseInt(match[2], 10) : equipment.config?.decoders || 0;

    const existingEncoders = Array.isArray(equipment.encoders) ? equipment.encoders : [];
    const existingDecoders = Array.isArray(equipment.decoders) ? equipment.decoders : [];

    equipment.encoders = Array.from({ length: encoderCount }, (_, index) => ({
        id: index + 1,
        status: existingEncoders[index]?.status || 'idle',
        channel: existingEncoders[index]?.channel || null
    }));

    equipment.decoders = Array.from({ length: decoderCount }, (_, index) => ({
        id: index + 1,
        status: existingDecoders[index]?.status || 'idle',
        connectedUnit: existingDecoders[index]?.connectedUnit || null
    }));

    equipment.config = { encoders: encoderCount, decoders: decoderCount };
}

function removeEquipment(inventoryKey, equipmentId) {
    const inventory = inventories[inventoryKey];
    if (!inventory) {
        showAlert('Inventory not found', 'error');
        return;
    }

    const wasEditing = editingEquipment && editingEquipment.inventoryKey === inventoryKey && editingEquipment.equipmentId === equipmentId;

    inventory.equipment = inventory.equipment.filter(eq => eq.id !== equipmentId);
    enforceChannelStreamingConsistency();
    saveInventories();
    
    if (wasEditing) {
        resetEquipmentForm();
    }
    
    updateEquipmentList();
    updateScriptEventDropdown();
    
    if (currentInventory === inventoryKey) {
        renderMCR();
    }
    
    showAlert('Equipment removed', 'success');
}

// Script Preset Functions
let currentPreviewPreset = null;

function loadPresetScript(presetKey) {
    const preset = PRESET_SCRIPTS[presetKey];
    if (!preset) return;

    // Store the preset key for later loading
    currentPreviewPreset = presetKey;

    // Show preview section
    document.getElementById('scriptPreviewSection').style.display = 'block';

    // Populate preview header
    document.getElementById('previewScriptName').textContent = preset.name;
    document.getElementById('previewInventory').textContent = `📦 Inventory: ${inventories[preset.inventory]?.name || preset.inventory}`;

    // Calculate duration
    const maxTime = Math.max(...preset.events.map(e => e.time));
    const minutes = Math.floor(maxTime / 60);
    const seconds = maxTime % 60;
    document.getElementById('previewDuration').textContent = `⏱️ Duration: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('previewEventCount').textContent = `📋 ${preset.events.length} events`;

    // Get unique devices involved
    const deviceIds = new Set();
    preset.events.forEach(event => {
        deviceIds.add(event.equipment);
        if (event.destination && typeof event.destination === 'string') {
            const parts = event.destination.split(':');
            if (parts.length >= 2) {
                deviceIds.add(parts[1]);
            }
        }
    });

    // Populate device list
    const deviceListHTML = Array.from(deviceIds).map(deviceId => {
        const equipment = findEquipmentByRef(deviceId);
        if (!equipment) return '';
        return `<div class="preview-device">${equipment.name} (${equipment.product})</div>`;
    }).filter(html => html).join('');
    document.getElementById('previewDeviceList').innerHTML = deviceListHTML;

    // Populate event sequence
    const eventListHTML = preset.events.map(event => {
        const minutes = Math.floor(event.time / 60);
        const seconds = event.time % 60;
        const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        return `
            <div class="preview-event">
                <div class="preview-event-time">${timeStr}</div>
                <div class="preview-event-desc">${event.description}</div>
            </div>
        `;
    }).join('');
    document.getElementById('previewEventList').innerHTML = eventListHTML;

    // Scroll to preview section
    document.getElementById('scriptPreviewSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeScriptPreview() {
    document.getElementById('scriptPreviewSection').style.display = 'none';
    currentPreviewPreset = null;
}

function confirmLoadScript() {
    if (!currentPreviewPreset) return;

    const preset = PRESET_SCRIPTS[currentPreviewPreset];
    if (!preset) return;

    // Clear existing events
    scriptEvents = [];

    // Switch to the correct inventory
    if (preset.inventory !== currentInventory) {
        document.getElementById('inventorySelect').value = preset.inventory;
        selectInventory();
    }

    // Load preset events
    preset.events.forEach(event => {
        const equipment = findEquipmentByRef(event.equipment);
        if (!equipment) return;

        let destinationDetails = null;
        let destinationName = '';

        if (event.destination) {
            const parsedDestination = parseDestinationValue(event.destination.includes(':') ? event.destination : `${preset.inventory}:${event.destination}`);
            if (parsedDestination) {
                const destInventoryKey = parsedDestination.inventoryKey || preset.inventory;
                const destEquipment = inventories[destInventoryKey]?.equipment.find(eq => eq.id === parsedDestination.equipmentId);
                if (destEquipment) {
                    destinationDetails = { ...parsedDestination, inventoryKey: destInventoryKey };
                    destinationName = buildDestinationName(destEquipment, destinationDetails);
                }
            }
        }

        const scriptEvent = {
            id: generateScriptEventId(),
            time: event.time,
            inventoryKey: preset.inventory,
            equipmentId: event.equipment,
            equipmentName: equipment.name,
            action: event.action,
            destination: destinationDetails,
            destinationName: destinationName,
            description: event.description
        };

        scriptEvents.push(scriptEvent);
    });

    scriptEvents.sort((a, b) => a.time - b.time);
    updateScriptTimeline();
    saveScriptEvents();

    // Close preview
    closeScriptPreview();

    showAlert(`Loaded preset: ${preset.name}`, 'success');
}

function findEquipmentByRef(equipmentRef) {
    // Find equipment across all inventories
    for (const inventoryKey of Object.keys(inventories)) {
        const equipment = inventories[inventoryKey].equipment.find(eq => eq.id === equipmentRef);
        if (equipment) return equipment;
    }
    return null;
}

function clearScript() {
    scriptEvents = [];
    updateScriptTimeline();
    resetScript();
    saveScriptEvents();
    showAlert('All script events cleared', 'info');
}
function updateScriptEventDropdown() {
    const equipmentDropdown = document.getElementById('eventEquipment');
    const destinationDropdown = document.getElementById('eventDestination');
    
    // Clear existing options
    equipmentDropdown.innerHTML = '<option value="">Select Equipment...</option>';
    destinationDropdown.innerHTML = '<option value="">Select Destination...</option>';
    
    Object.keys(inventories).forEach(inventoryKey => {
        inventories[inventoryKey].equipment.forEach(equipment => {
            // Add all equipment to equipment dropdown
            const option = document.createElement('option');
            option.value = `${inventoryKey}:${equipment.id}`;
            option.textContent = `${equipment.name} (${inventories[inventoryKey].name})`;
            equipmentDropdown.appendChild(option);
            
            // Add servers and destinations to destination dropdown
            if (equipment.type === 'server' || equipment.type === 'destination') {
                const destOption = document.createElement('option');
                destOption.value = `${inventoryKey}:${equipment.id}`;
                destOption.textContent = `${equipment.name} (${inventories[inventoryKey].name})`;
                destinationDropdown.appendChild(destOption);

                if (equipment.type === 'server') {
                    // Add server channels as selectable destinations
                    equipment.channels?.forEach(channel => {
                        const channelOption = document.createElement('option');
                        channelOption.value = `${inventoryKey}:${equipment.id}:channel:${channel.id}`;
                        channelOption.textContent = `${equipment.name} - ${channel.id} (${inventories[inventoryKey].name})`;
                        destinationDropdown.appendChild(channelOption);
                    });

                    // Add server instances as separate destinations
                    equipment.instances?.forEach(instance => {
                        const instOption = document.createElement('option');
                        instOption.value = `${inventoryKey}:${equipment.id}:instance:${instance.name}`;
                        instOption.textContent = `${equipment.name} - ${instance.name} (${inventories[inventoryKey].name})`;
                        destinationDropdown.appendChild(instOption);
                    });
                }
            }
        });
    });
}

function updateActionOptions() {
    const equipmentRef = document.getElementById('eventEquipment').value;
    const actionSelect = document.getElementById('eventAction');
    
    if (!equipmentRef) return;
    
    const [inventoryKey, equipmentId] = equipmentRef.split(':');
    const equipment = inventories[inventoryKey].equipment.find(eq => eq.id === equipmentId);
    
    // Clear and repopulate action options based on equipment type
    actionSelect.innerHTML = '';
    
    if (equipment.type === 'unit') {
        actionSelect.innerHTML = `
            <option value="online">Go Online</option>
            <option value="offline">Go Offline</option>
            <option value="streaming">Start Streaming</option>
            <option value="stop-streaming">Stop Streaming</option>
        `;
    } else if (equipment.type === 'server') {
        actionSelect.innerHTML = `
            <option value="online">Go Online</option>
            <option value="offline">Go Offline</option>
            <option value="start-instance">Start Instance</option>
            <option value="stop-instance">Stop Instance</option>
        `;
    } else if (equipment.type === 'destination') {
        actionSelect.innerHTML = `
            <option value="online">Go Online</option>
            <option value="offline">Go Offline</option>
        `;
    }
    
    toggleDestinationField();
}

function toggleDestinationField() {
    const action = document.getElementById('eventAction').value;
    const destinationGroup = document.getElementById('destinationGroup');
    
    // Show destination field only for streaming actions
    if (action === 'streaming' || action === 'start-instance') {
        destinationGroup.style.display = 'block';
    } else {
        destinationGroup.style.display = 'none';
    }
}

function parseDestinationValue(value) {
    if (!value) return null;

    const parts = value.split(':');
    if (parts.length < 2) return null;

    let inventoryKey = parts[0];
    let equipmentId = parts[1];
    let remainder = parts.slice(2);

    if (!inventories[inventoryKey]) {
        const inferredInventory = findEquipmentInventoryKey(inventoryKey);
        if (!inferredInventory) return null;
        equipmentId = inventoryKey;
        inventoryKey = inferredInventory;
        remainder = parts.slice(1);
    }

    if (!equipmentId) return null;

    const target = { inventoryKey, equipmentId, type: 'equipment' };

    if (remainder.length >= 2) {
        const type = remainder[0];
        const rest = remainder.slice(1).join(':');
        if (type === 'channel') {
            return { ...target, channelName: rest, type: 'channel' };
        }
        if (type === 'instance') {
            return { ...target, instanceName: rest, type: 'instance' };
        }
        return { ...target, extra: rest, type };
    }

    if (remainder.length === 1) {
        const tail = remainder[0];
        if (tail.toLowerCase().startsWith('channel')) {
            return { ...target, channelName: tail, type: 'channel' };
        }
        return { ...target, instanceName: tail, type: 'instance' };
    }

    return target;
}

function buildDestinationName(equipment, details) {
    if (!equipment || !details) return equipment?.name || '';
    if (details.channelName) {
        return `${equipment.name} - ${details.channelName}`;
    }
    if (details.instanceName) {
        return `${equipment.name} - ${details.instanceName}`;
    }
    return equipment.name;
}

function findEquipmentInventoryKey(equipmentId) {
    const targetId = String(equipmentId);
    for (const inventoryKey of Object.keys(inventories)) {
        if (inventories[inventoryKey].equipment.some(eq => String(eq.id) === targetId)) {
            return inventoryKey;
        }
    }
    return null;
}

function escapeForSelector(value) {
    const str = String(value);
    if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
        return CSS.escape(str);
    }
    return str.replace(/[^a-zA-Z0-9_-]/g, match => `\\${match}`);
}

function escapeAttribute(value) {
    return String(value).replace(/"/g, '&quot;');
}

function buildEncoderSelector(encoderId, side = 'output') {
    return `[data-encoder-id="${escapeForSelector(encoderId)}"][data-anchor-side="${escapeForSelector(side)}"]`;
}

function buildChannelSelector(channelId, side = 'output') {
    return `[data-channel-anchor="${escapeForSelector(channelId)}:${escapeForSelector(side)}"]`;
}

function buildInstanceSelector(instanceName, side = 'output') {
    return `[data-instance-anchor="${escapeForSelector(instanceName)}:${escapeForSelector(side)}"]`;
}

function buildDecoderSelector(decoderId, side = 'input') {
    return `[data-decoder-anchor="${escapeForSelector(decoderId)}:${escapeForSelector(side)}"]`;
}

function buildDestinationSelector(equipmentId, side = 'input') {
    const normalizedSide = side === 'output' ? 'output' : 'input';
    const selector = `[data-destination-anchor="${escapeForSelector(equipmentId)}:${escapeForSelector(normalizedSide)}"]`;
    return normalizedSide === 'output'
        ? `${selector}, [data-destination-anchor="${escapeForSelector(equipmentId)}:input"]`
        : selector;
}

function buildIngestSelector(equipmentId, side = 'input') {
    const normalizedSide = side === 'output' ? 'output' : 'input';
    return `[data-ingest-anchor="${escapeForSelector(equipmentId)}:${escapeForSelector(normalizedSide)}"]`;
}

function buildSrtSelector(equipmentId, side = 'input') {
    const normalizedSide = side === 'output' ? 'output' : 'input';
    return `[data-srt-anchor="${escapeForSelector(equipmentId)}:${escapeForSelector(normalizedSide)}"]`;
}

function buildDecoderRoutingValue(inventoryKey, equipmentId, decoderId) {
    return `${String(inventoryKey)}:${String(equipmentId)}:decoder:${String(decoderId)}`;
}

function buildEquipmentSelector(equipmentId, side = 'input') {
    const normalizedSide = side === 'output' ? 'output' : 'input';
    const base = `[data-equipment-anchor="${escapeForSelector(equipmentId)}:${escapeForSelector(normalizedSide)}"]`;
    const fallback = normalizedSide === 'output' ? '.connector-anchor.output' : '.connector-anchor.input';
    return `${base}, ${fallback}`;
}

function addScriptEvent() {
    const time = Number.parseInt(document.getElementById('eventTime').value, 10);
    const equipmentRef = document.getElementById('eventEquipment').value;
    const action = document.getElementById('eventAction').value;
    const destinationRef = document.getElementById('eventDestination').value;
    const description = document.getElementById('eventDescription').value;

    if (Number.isNaN(time) || time < 0 || !equipmentRef || !action) {
        showAlert('Please provide a valid time and fill in all required fields', 'error');
        return;
    }

    // Check if destination is required but not provided
    if ((action === 'streaming' || action === 'start-instance') && !destinationRef) {
        showAlert('Please select a streaming destination', 'error');
        return;
    }

    const [inventoryKey, equipmentId] = equipmentRef.split(':');
    const equipment = inventories[inventoryKey].equipment.find(eq => eq.id === equipmentId);

    let destinationName = '';
    let destinationDetails = null;
    let destEquipment = null;
    
    if (destinationRef) {
        const parsed = parseDestinationValue(destinationRef);
        if (!parsed) {
            showAlert('Invalid destination selection', 'error');
            return;
        }

        destEquipment = inventories[parsed.inventoryKey]?.equipment.find(eq => eq.id === parsed.equipmentId);
        if (!destEquipment) {
            showAlert('Destination equipment not found', 'error');
            return;
        }

        if (action === 'streaming' && destEquipment.type === 'server' && !parsed.channelName && !parsed.instanceName) {
            showAlert('Please select a specific server channel for streaming', 'error');
            return;
        }

        destinationDetails = parsed;
        destinationName = buildDestinationName(destEquipment, parsed);
    }

    // Auto-generate description if not provided
    let eventDescription = description;
    if (!eventDescription) {
        switch (action) {
            case 'streaming':
                eventDescription = `${equipment.name} starts streaming to ${destinationName || 'destination'}`;
                break;
            case 'stop-streaming':
                eventDescription = `${equipment.name} stops streaming`;
                break;
            case 'start-instance':
                eventDescription = `${destinationName} starts receiving stream`;
                break;
            case 'stop-instance':
                eventDescription = `${destinationName} stops receiving stream`;
                break;
            default:
                eventDescription = `${equipment.name} goes ${action}`;
        }
    }

    const event = {
        id: generateScriptEventId(),
        time: time,
        inventoryKey: inventoryKey,
        equipmentId: equipmentId,
        equipmentName: equipment.name,
        action: action,
        destination: destinationDetails,
        destinationName: destinationName,
        description: eventDescription
    };

    scriptEvents.push(event);
    scriptEvents.sort((a, b) => a.time - b.time);
    saveScriptEvents();

    // Clear form
    document.getElementById('eventTime').value = '';
    document.getElementById('eventEquipment').value = '';
    document.getElementById('eventAction').innerHTML = '<option value="online">Go Online</option><option value="offline">Go Offline</option>';
    document.getElementById('eventDestination').value = '';
    document.getElementById('eventDescription').value = '';
    document.getElementById('destinationGroup').style.display = 'none';

    updateScriptTimeline();
    showAlert('Script event added', 'success');
}

function updateScriptTimeline() {
    const container = document.getElementById('scriptTimeline');
    
    if (scriptEvents.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #666; padding: 20px;">No script events defined</div>';
        return;
    }
    
    container.innerHTML = '';
    
    scriptEvents.forEach(event => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-time">${formatTime(event.time)}</div>
                <div class="timeline-action">${event.description}</div>
            </div>
            <div class="timeline-controls">
                <button class="btn btn-small btn-danger" onclick="removeScriptEvent(${event.id})">
                    Remove
                </button>
            </div>
        `;
        
        container.appendChild(item);
    });
}

function removeScriptEvent(eventId) {
    scriptEvents = scriptEvents.filter(event => event.id !== eventId);
    saveScriptEvents();
    updateScriptTimeline();
    showAlert('Script event removed', 'success');
}

function startScript() {
    if (scriptRunning) return;
    
    scriptRunning = true;
    scriptStartTime = Date.now();
    const statusLabel = document.getElementById('scriptStatus');
    if (statusLabel) {
        statusLabel.textContent = 'Running';
    }
    scriptEvents.forEach(event => {
        event.executed = false;
    });
    
    scriptInterval = setInterval(updateScript, 1000);
    showAlert('Script started!', 'success');
}

function stopScript() {
    scriptRunning = false;
    if (scriptInterval) {
        clearInterval(scriptInterval);
        scriptInterval = null;
    }
    const statusLabel = document.getElementById('scriptStatus');
    if (statusLabel) {
        statusLabel.textContent = 'Stopped';
    }
    showAlert('Script stopped', 'info');
}

function resetScript() {
    stopScript();
    scriptStartTime = null;
    document.getElementById('scriptTime').textContent = '00:00';
    scriptEvents.forEach(event => {
        delete event.executed;
    });
    saveScriptEvents();
    showAlert('Script reset', 'info');
}

function updateScript() {
    if (!scriptRunning || !scriptStartTime) return;
    
    const elapsed = Math.floor((Date.now() - scriptStartTime) / 1000);
    document.getElementById('scriptTime').textContent = formatTime(elapsed);
    
    // Execute script events
    scriptEvents.forEach(event => {
        if (event.time === elapsed && !event.executed) {
            executeScriptEvent(event);
            event.executed = true;
        }
    });
}

function buildUnitStreamingStateMap() {
    const state = {};
    if (!inventories) return state;

    Object.keys(inventories).forEach(inventoryKey => {
        const equipmentList = inventories[inventoryKey]?.equipment || [];
        equipmentList.forEach(eq => {
            if (!eq || eq.type !== 'unit') return;
            const explicitStatus = String(eq.status || '').toLowerCase();
            const encoders = Array.isArray(eq.encoders) ? eq.encoders : [];
            const hasStreamingEncoder = encoders.some(encoder => {
                if (!encoder || typeof encoder.status !== 'string') return false;
                return encoder.status.toLowerCase() === 'streaming';
            });
            const hasConnectedEncoder = encoders.some(encoder => {
                if (!encoder || typeof encoder.status !== 'string') return false;
                return encoder.status.toLowerCase() === 'connected';
            });

            state[eq.id] = {
                isOffline: explicitStatus === 'offline',
                isStreaming: explicitStatus === 'streaming' || hasStreamingEncoder,
                isConnected: explicitStatus === 'connected' || hasConnectedEncoder
            };
        });
    });

    return state;
}

function enforceChannelStreamingConsistency() {
    if (!inventories) return;

    const unitStates = buildUnitStreamingStateMap();

    Object.keys(inventories).forEach(inventoryKey => {
        const equipmentList = inventories[inventoryKey]?.equipment || [];
        equipmentList.forEach(eq => {
            if (!eq || eq.type !== 'server' || !Array.isArray(eq.channels)) return;

            eq.channels.forEach(channel => {
                if (!channel) return;

                const unitId = channel.connectedUnit;
                const unitState = unitId ? unitStates[unitId] : null;
                const channelStatus = String(channel.status || '').toLowerCase();

                if (!unitState) {
                    if (unitId) {
                        channel.connectedUnit = null;
                    }
                    if (!channelStatus || channelStatus === 'streaming' || channelStatus === 'connected') {
                        channel.status = 'idle';
                    }
                    return;
                }

                if (unitState.isOffline) {
                    channel.status = 'idle';
                    channel.connectedUnit = null;
                    return;
                }

                if (unitState.isStreaming) {
                    channel.status = 'streaming';
                    return;
                }

                if (unitState.isConnected) {
                    channel.status = 'connected';
                } else {
                    channel.status = 'idle';
                    channel.connectedUnit = null;
                }
            });
        });
    });
}

function executeScriptEvent(event) {
    let normalizedDestination = false;
    if (event.destination && typeof event.destination === 'string') {
        const parsed = parseDestinationValue(event.destination);
        if (parsed) {
            event.destination = parsed;
            const destInventoryKey = parsed.inventoryKey;
            const destEquipment = inventories[destInventoryKey]?.equipment.find(eq => eq.id === parsed.equipmentId);
            if (destEquipment) {
                event.destinationName = buildDestinationName(destEquipment, parsed);
            }
            normalizedDestination = true;
        }
    }

    const equipment = inventories[event.inventoryKey].equipment.find(eq => eq.id === event.equipmentId);
    if (!equipment) return;
    
    // Update equipment status
    if (event.action === 'online' || event.action === 'offline') {
        equipment.status = event.action;
        delete equipment.channel; // Clear any streaming channel
        
    } else if (event.action === 'streaming') {
        equipment.status = 'streaming';
        
        // Set the streaming destination
        if (event.destination && event.destination.channelName) {
            equipment.channel = event.destination.channelName;
        } else if (event.destination && event.destination.instanceName) {
            equipment.channel = event.destination.instanceName;
        } else if (event.destination) {
            equipment.channel = event.destinationName;
        } else {
            equipment.channel = 'Instance 1'; // Default fallback
        }

        if (equipment.type === 'unit' && equipment.encoders?.length) {
            const desiredChannel = (event.destination && (event.destination.channelName || event.destination.instanceName)) || equipment.channel;
            equipment.encoders = equipment.encoders.map((enc, index) => {
                const matchesChannel = desiredChannel && enc.channel && String(enc.channel).toLowerCase() === String(desiredChannel).toLowerCase();
                const shouldStream = matchesChannel || (!matchesChannel && desiredChannel && !enc.channel && index === 0) || (!desiredChannel && index === 0);
                return {
                    ...enc,
                    status: shouldStream ? 'streaming' : enc.status === 'connected' ? 'connected' : 'idle',
                    channel: shouldStream ? (desiredChannel || enc.channel) : enc.channel
                };
            });
        }

        // Update destination server instance if specified
        if (event.destination && event.destination.instanceName) {
            const destEquipment = inventories[event.destination.inventoryKey].equipment.find(eq => eq.id === event.destination.equipmentId);
            if (destEquipment && destEquipment.instances) {
                const instance = destEquipment.instances.find(inst => inst.name === event.destination.instanceName);
                if (instance) {
                    instance.status = 'streaming';
                }
            }
        } else if (event.destination) {
            const destEquipment = inventories[event.destination.inventoryKey].equipment.find(eq => eq.id === event.destination.equipmentId);
            if (destEquipment) {
                if (destEquipment.type === 'server' && destEquipment.channels?.length) {
                    const channel = event.destination.channelName
                        ? destEquipment.channels.find(ch => String(ch.id).toLowerCase() === event.destination.channelName.toLowerCase())
                        : destEquipment.channels.find(ch => ch.connectedUnit === equipment.id) || destEquipment.channels[0];
                    if (channel) {
                        channel.status = 'streaming';
                        channel.connectedUnit = equipment.id;
                    }
                } else if (destEquipment.type === 'destination') {
                    destEquipment.status = 'streaming';
                    destEquipment.connectedChannel = event.destination.channelName || equipment.channel || event.destinationName;
                }
            }
        }

    } else if (event.action === 'stop-streaming') {
        equipment.status = 'online';
        delete equipment.channel;

        if (equipment.type === 'unit' && equipment.encoders?.length) {
            equipment.encoders = equipment.encoders.map(enc => ({
                ...enc,
                status: enc.status === 'streaming' ? 'connected' : enc.status
            }));
        }

        if (event.destination) {
            const destEquipment = inventories[event.destination.inventoryKey].equipment.find(eq => eq.id === event.destination.equipmentId);
            if (destEquipment) {
                if (destEquipment.type === 'server' && destEquipment.channels?.length) {
                    const channel = event.destination.channelName
                        ? destEquipment.channels.find(ch => String(ch.id).toLowerCase() === event.destination.channelName.toLowerCase())
                        : destEquipment.channels.find(ch => ch.connectedUnit === equipment.id);
                    if (channel) {
                        channel.status = 'connected';
                    }
                } else if (destEquipment.type === 'destination') {
                    destEquipment.status = 'online';
                    if (destEquipment.connectedChannel === equipment.channel) {
                        destEquipment.connectedChannel = null;
                    }
                }
            }
        }

    } else if (event.action === 'start-instance') {
        // For server instance actions
        if (event.destination && event.destination.instanceName) {
            const destEquipment = inventories[event.destination.inventoryKey].equipment.find(eq => eq.id === event.destination.equipmentId);
            if (destEquipment && destEquipment.instances) {
                const instance = destEquipment.instances.find(inst => inst.name === event.destination.instanceName);
                if (instance) {
                    instance.status = 'streaming';
                }
            }
        }
        
    } else if (event.action === 'stop-instance') {
        // For server instance actions
        if (event.destination && event.destination.instanceName) {
            const destEquipment = inventories[event.destination.inventoryKey].equipment.find(eq => eq.id === event.destination.equipmentId);
            if (destEquipment && destEquipment.instances) {
                const instance = destEquipment.instances.find(inst => inst.name === event.destination.instanceName);
                if (instance) {
                    instance.status = 'idle';
                }
            }
        }

    // HACKATHON ENHANCEMENTS: New script actions
    } else if (event.action === 'set-battery') {
        // Update battery level
        if (!equipment.battery) {
            equipment.battery = { percentage: 100, remainingMinutes: 300, charging: false };
        }
        equipment.battery.percentage = event.value || 100;
        // Estimate remaining minutes based on percentage (assume ~3 hours at 100%)
        equipment.battery.remainingMinutes = Math.floor((event.value / 100) * 180);

    } else if (event.action === 'degrade-link') {
        // Degrade a specific link's signal quality
        if (equipment.links && equipment.links[event.linkIndex]) {
            equipment.links[event.linkIndex].signal = event.signal || 1;
            if (event.signal <= 2) {
                // Critical signal might reduce bandwidth
                equipment.links[event.linkIndex].bandwidth = Math.floor(equipment.links[event.linkIndex].bandwidth * 0.4);
            } else if (event.signal <= 3) {
                equipment.links[event.linkIndex].bandwidth = Math.floor(equipment.links[event.linkIndex].bandwidth * 0.7);
            }
        }

    } else if (event.action === 'restore-link') {
        // Restore a link's signal quality
        if (equipment.links && equipment.links[event.linkIndex]) {
            equipment.links[event.linkIndex].signal = event.signal || 5;
            // Restore to original bandwidth (stored in data or use reasonable default)
            const linkType = equipment.links[event.linkIndex].technology;
            if (linkType === '5G') {
                equipment.links[event.linkIndex].bandwidth = 2500;
            } else if (linkType === 'LTE') {
                equipment.links[event.linkIndex].bandwidth = 3100;
            } else if (equipment.links[event.linkIndex].type === 'ethernet') {
                equipment.links[event.linkIndex].bandwidth = 5000;
            } else {
                equipment.links[event.linkIndex].bandwidth = 2000; // Default
            }
        }
    }
    enforceChannelStreamingConsistency();
    saveInventories();
    
    // Refresh MCR if this inventory is currently displayed
    if (currentInventory === event.inventoryKey || 
        (event.destination && currentInventory === event.destination.inventoryKey)) {
        renderMCR();
    }
    
    if (normalizedDestination) {
        saveScriptEvents();
    }
    showAlert(`Script: ${event.description}`, 'info');
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const numberFormatter = new Intl.NumberFormat('en-US');
const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

function formatNumber(value) {
    return numberFormatter.format(Math.max(0, Math.round(value)));
}

function formatTimestamp(date) {
    if (!(date instanceof Date)) {
        return timeFormatter.format(new Date(date));
    }
    return timeFormatter.format(date);
}

function parseNumericContent(text) {
    if (!text) return 0;
    const numeric = text.replace(/[^\d.-]/g, '');
    const parsed = Number(numeric);
    return Number.isFinite(parsed) ? parsed : 0;
}

function startLiveClock() {
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
    }

    const updateClock = () => {
        const clockEl = document.getElementById('clockTime');
        if (!clockEl) return;
        clockEl.textContent = formatTimestamp(new Date());
    };

    updateClock();
    clockInterval = setInterval(updateClock, 1000);
}

function animateMetric(elementId, value, options = {}) {
    const element = document.getElementById(elementId);
    if (!element || typeof value !== 'number') return;

    const {
        suffix = '',
        prefix = '',
        formatter,
        duration = 520
    } = options;

    const targetValue = Math.max(0, Math.round(value));
    const storedValue = Number(element.dataset.value);
    const startValue = Number.isFinite(storedValue)
        ? storedValue
        : parseNumericContent(element.textContent);

    const render = (val) => {
        const normalized = Math.max(0, Math.round(val));
        const formattedValue = formatter ? formatter(normalized) : normalized.toString();
        const prefixText = prefix || '';
        const suffixText = suffix ? ` ${suffix}` : '';
        element.textContent = `${prefixText}${formattedValue}${suffixText}`;
    };

    if (startValue === targetValue) {
        render(targetValue);
        element.dataset.value = targetValue;
        return;
    }

    const startTime = performance.now();

    const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const current = startValue + (targetValue - startValue) * eased;
        render(current);

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            render(targetValue);
            element.dataset.value = targetValue;
        }
    };

    requestAnimationFrame(step);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function supportsLocalStorage() {
    try {
        if (typeof window === 'undefined' || !('localStorage' in window)) {
            return false;
        }
        const testKey = '__liveu_mcr_storage_test__';
        window.localStorage.setItem(testKey, '1');
        window.localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

function deepClone(data) {
    if (data === null || data === undefined) {
        return data;
    }
    return JSON.parse(JSON.stringify(data));
}

function loadInventories() {
    if (!STORAGE_AVAILABLE) {
        return deepClone(DEFAULT_INVENTORIES);
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEYS.inventories);
        if (!raw) {
            return deepClone(DEFAULT_INVENTORIES);
        }

        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            return parsed;
        }
    } catch (error) {
        console.warn('Failed to load inventories from storage, using defaults instead.', error);
    }

    return deepClone(DEFAULT_INVENTORIES);
}

function saveInventories() {
    if (!STORAGE_AVAILABLE) return;

    try {
        window.localStorage.setItem(STORAGE_KEYS.inventories, JSON.stringify(inventories));
    } catch (error) {
        console.warn('Failed to persist inventories to storage.', error);
    }
}

function loadScriptEvents() {
    if (!STORAGE_AVAILABLE) {
        return deepClone(DEFAULT_SCRIPT_EVENTS);
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEYS.scriptEvents);
        if (!raw) {
            return deepClone(DEFAULT_SCRIPT_EVENTS);
        }

        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            const sanitized = parsed
                .filter(event => event && typeof event === 'object')
                .map(event => {
                    const sanitizedEvent = { ...event };
                    sanitizedEvent.time = Number(sanitizedEvent.time) || 0;
                    if (typeof sanitizedEvent.id !== 'number' || Number.isNaN(sanitizedEvent.id)) {
                        sanitizedEvent.id = generateScriptEventId();
                    } else {
                        scriptEventIdCounter = Math.max(scriptEventIdCounter, sanitizedEvent.id);
                    }
                    return sanitizedEvent;
                })
                .sort((a, b) => a.time - b.time);

            return sanitized;
        }
    } catch (error) {
        console.warn('Failed to load script events from storage, using defaults instead.', error);
    }

    return deepClone(DEFAULT_SCRIPT_EVENTS);
}

function saveScriptEvents() {
    if (!STORAGE_AVAILABLE) return;

    try {
        const serializable = scriptEvents
            .map(({ executed, ...event }) => ({
                ...event,
                time: Number(event.time) || 0
            }))
            .sort((a, b) => a.time - b.time);
        window.localStorage.setItem(STORAGE_KEYS.scriptEvents, JSON.stringify(serializable));
    } catch (error) {
        console.warn('Failed to persist script events to storage.', error);
    }
}

function generateScriptEventId() {
    scriptEventIdCounter = Math.max(scriptEventIdCounter + 1, Date.now());
    return scriptEventIdCounter;
}

function loadLastInventoryKey() {
    if (!STORAGE_AVAILABLE) {
        return '';
    }

    try {
        return window.localStorage.getItem(STORAGE_KEYS.lastInventory) || '';
    } catch (error) {
        console.warn('Failed to read last inventory selection from storage.', error);
        return '';
    }
}

function saveLastInventoryKey(value) {
    if (!STORAGE_AVAILABLE) return;

    try {
        if (value) {
            window.localStorage.setItem(STORAGE_KEYS.lastInventory, value);
        } else {
            window.localStorage.removeItem(STORAGE_KEYS.lastInventory);
        }
    } catch (error) {
        console.warn('Failed to persist last inventory selection.', error);
    }
}

// MCR Controls
function toggleAutoRefresh() {
    autoRefresh = !autoRefresh;
    updateCanvasControls();
    
    if (autoRefresh) {
        showAlert('Auto-refresh enabled', 'success');
        // Auto-refresh would update from "API" every 10 seconds
    } else {
        showAlert('Auto-refresh disabled', 'info');
    }
}

function refreshMCR() {
    if (currentInventory) {
        renderMCR();
        showAlert('MCR refreshed', 'success');
    } else {
        showAlert('Please select an inventory first', 'error');
    }
}

function toggleConnections() {
    showConnections = !showConnections;
    renderMCR();
    showAlert(`Connection lines ${showConnections ? 'enabled' : 'disabled'}`, 'info');
}

// Alert System
function showAlert(message, type = 'info') {
    const alert = document.getElementById('alertBox');
    alert.textContent = message;
    alert.className = `alert ${type}`;
    alert.classList.add('show');

    setTimeout(() => {
        alert.classList.remove('show');
    }, 4000);
}

// ========================================
// HACKATHON ENHANCEMENTS
// ========================================

// Equipment Detail Modal
function showEquipmentDetail(equipment) {
    // Remove any existing modal
    const existingModal = document.querySelector('.equipment-detail-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'equipment-detail-modal';

    // Format battery info
    let batteryHTML = '';
    if (equipment.battery) {
        const hours = Math.floor(equipment.battery.remainingMinutes / 60);
        const mins = equipment.battery.remainingMinutes % 60;
        batteryHTML = `
            <div class="detail-item">
                <label>Battery:</label>
                <value>🔋 ${equipment.battery.percentage}% (${hours}h ${mins}m)${equipment.battery.charging ? ' ⚡ Charging' : ''}</value>
            </div>
        `;
    }

    // Format story info
    let storyHTML = '';
    if (equipment.story) {
        storyHTML = `
            <div class="detail-item">
                <label>Story:</label>
                <value>📋 ${equipment.story.slugline}</value>
            </div>
            <div class="detail-item">
                <label>Crew:</label>
                <value>👤 ${equipment.story.crew}</value>
            </div>
        `;
    }

    // Format links info
    let linksHTML = '';
    if (equipment.links && equipment.links.length > 0) {
        const linksDetail = equipment.links.map(link => {
            const signalBars = '●'.repeat(link.signal) + '○'.repeat(5 - link.signal);
            const bwDisplay = link.connected ? `${(link.bandwidth / 1000).toFixed(1)} Mbps` : 'Disconnected';
            return `${link.name}: ${signalBars} ${bwDisplay}`;
        }).join('<br>');

        linksHTML = `
            <div class="detail-item" style="grid-column: 1 / -1;">
                <label>Network Links:</label>
                <value style="line-height: 1.8;">${linksDetail}</value>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${equipment.name}</h2>
            <div class="detail-grid">
                <div class="detail-item">
                    <label>Product:</label>
                    <value>${equipment.product}</value>
                </div>
                <div class="detail-item">
                    <label>Status:</label>
                    <value class="status-${equipment.status}">${equipment.status.toUpperCase()}</value>
                </div>
                <div class="detail-item">
                    <label>Mode:</label>
                    <value>📹 ${equipment.mode || 'N/A'}</value>
                </div>
                <div class="detail-item">
                    <label>Uptime:</label>
                    <value>⏱️ ${equipment.uptime || 'N/A'}</value>
                </div>
                ${equipment.onAir ? `
                    <div class="detail-item">
                        <label>On-Air:</label>
                        <value style="color: #ff0000; font-weight: 700;">🔴 LIVE</value>
                    </div>
                ` : ''}
                ${equipment.delay ? `
                    <div class="detail-item">
                        <label>Delay:</label>
                        <value>⏱️ ${(equipment.delay / 1000).toFixed(1)}s</value>
                    </div>
                ` : ''}
                ${equipment.videoReturn ? `
                    <div class="detail-item">
                        <label>Video Return:</label>
                        <value>↩️ Active</value>
                    </div>
                ` : ''}
                ${equipment.location ? `
                    <div class="detail-item">
                        <label>Location:</label>
                        <value>📍 ${equipment.location}</value>
                    </div>
                ` : ''}
                ${batteryHTML}
                ${storyHTML}
                ${equipment.bandwidth ? `
                    <div class="detail-item">
                        <label>Bandwidth:</label>
                        <value>📊 ${equipment.bandwidth.current} / ${equipment.bandwidth.max} Kbps</value>
                    </div>
                ` : ''}
                ${linksHTML}
            </div>
            <button class="modal-close-btn" onclick="this.closest('.equipment-detail-modal').remove()">Close</button>
        </div>
    `;

    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close modal on ESC key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);

    document.body.appendChild(modal);
}
