import sqlite3, json, time

conn = sqlite3.connect('backend/.tmp/data.db')
c = conn.cursor()

now = int(time.time() * 1000)

def insert_req(data):
    keys = list(data.keys())
    vals = [data[k] for k in keys]
    placeholders = ', '.join(['?'] * len(keys))
    col_str = ', '.join(keys)
    c.execute(f"INSERT OR REPLACE INTO supervisor_requests ({col_str}) VALUES ({placeholders})", vals)

# Delete temporary tester issue #2
c.execute("DELETE FROM supervisor_requests WHERE id = 2")

# Issue 1: High Safety Hazard (In Progress - Assigned to Santosh Shinde)
audit_1 = [
    {'timestamp': '18 Nov 2026, 02:30 PM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Incident Reported', 'note': 'Floor opening edge protection dislodged near stairwell shaft'},
    {'timestamp': '18 Nov 2026, 03:15 PM', 'actor': 'PM Kulkarni (Admin)', 'action': 'Reviewed & Assigned', 'note': 'Priority confirmed Critical. Assigned to Santosh Shinde for immediate scaffolding reinforcement.'},
    {'timestamp': '18 Nov 2026, 03:45 PM', 'actor': 'Santosh Shinde (Worker)', 'action': 'Assignment Acknowledged', 'note': 'Gathering clamping pipes and safety toe-boards from yard.'},
    {'timestamp': '18 Nov 2026, 04:30 PM', 'actor': 'Santosh Shinde (Worker)', 'action': 'Work Started & Progress Updated (60%)', 'note': 'Installed primary double guardrail pipes. Anchoring mid-rails now.'}
]

insert_req({
    'document_id': 'iss_sky_001',
    'request_type': 'Site Issue',
    'issue_reference': 'ISS-2026-001',
    'title': 'Stairwell Shaft Core Floor Opening Guardrail Dislodged',
    'project': 'Skyline Commercial Complex (Tower A)',
    'site': 'Tower A (Podium & Core)',
    'category': 'Site Safety Hazard (EHS)',
    'priority': 'Critical',
    'status': 'In Progress',
    'incident_time': '14:15',
    'exact_location': 'Tower A Level 4 North Stairwell Shear Wall',
    'immediate_action': 'Cordoned off opening with high-visibility red caution tape, posted standby safety marshal',
    'safety_risk': 'Severe fall from height risk (18m vertical void to podium level)',
    'work_impact': 'Concreting transit halted across Level 4 corridor',
    'remarks': 'Subcontractor removed toe-board to pass conduit duct and failed to restore scaffolding clamps.',
    'admin_remarks': 'High EHS violation risk. Approved scaffolding crew mobilization immediately.',
    'submitted_by': 'Er. Pravin Gaikwad (Chief Supervisor)',
    'submitted_date': '18 Nov 2026',
    'assigned_supervisor': 'Er. Pravin Gaikwad',
    'assigned_worker_id': 3,
    'assigned_worker_name': 'Santosh Shinde',
    'worker_remarks': 'Guardrail replacement 60% complete. Safety harnesses tethered to lifeline.',
    'audit_timeline_json': json.dumps(audit_1),
    'created_at': now - 86400000,
    'updated_at': now - 3600000,
    'published_at': now - 86400000
})

# Issue 2: Machinery Breakdown (Resolution Submitted by Ramesh Patil)
audit_2 = [
    {'timestamp': '18 Nov 2026, 09:00 AM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Incident Reported', 'note': 'Bar bending machine main drive roller jammed during 32mm rebar bending'},
    {'timestamp': '18 Nov 2026, 10:00 AM', 'actor': 'PM Kulkarni (Admin)', 'action': 'Assigned to Master Mason', 'note': 'Assigned to Ramesh Patil to clear steel burr and replace drive shear pin'},
    {'timestamp': '18 Nov 2026, 10:30 AM', 'actor': 'Ramesh Patil (Worker)', 'action': 'Assignment Acknowledged', 'note': 'Mobilized mechanical toolkit in fabrication yard.'},
    {'timestamp': '18 Nov 2026, 11:15 AM', 'actor': 'Ramesh Patil (Worker)', 'action': 'Work Started', 'note': 'Dismantled safety cowl and extracted jammed offcut.'},
    {'timestamp': '18 Nov 2026, 01:30 PM', 'actor': 'Ramesh Patil (Worker)', 'action': 'Resolution Submitted', 'note': 'Replaced broken keyway and greased planetary gears. Test bent 4 samples of 32mm Fe-550D successfully.'}
]

insert_req({
    'document_id': 'iss_sky_002',
    'request_type': 'Site Issue',
    'issue_reference': 'ISS-2026-002',
    'title': 'Heavy Rebar Bending Machine Drive Roller Jam & Keyway Rupture',
    'project': 'Skyline Commercial Complex (Tower A)',
    'site': 'Tower A (Podium & Core)',
    'category': 'Machinery Breakdown',
    'priority': 'High',
    'status': 'Resolution Submitted',
    'incident_time': '08:45',
    'exact_location': 'Rebar Fabrication Yard Bay 2',
    'immediate_action': 'Emergency electrical stop isolated, circuit tagged out (LOTO)',
    'safety_risk': 'Flyaway metal shard hazard if roller motor re-energized under mechanical bind',
    'work_impact': 'Transfer girder steel cage prefabrication paused',
    'remarks': 'Motor running hot, roller pinion seized against 32mm high-tensile bar.',
    'admin_remarks': 'Spares available in stores. Ramesh Patil authorized for mechanical overhaul.',
    'submitted_by': 'Er. Pravin Gaikwad (Chief Supervisor)',
    'submitted_date': '18 Nov 2026',
    'assigned_supervisor': 'Er. Pravin Gaikwad',
    'assigned_worker_id': 1,
    'assigned_worker_name': 'Ramesh Patil',
    'worker_remarks': 'Machine tested at full load for 20 minutes without abnormal noise or vibration.',
    'resolution_description': 'Removed jammed metal chips, replaced fractured M12 shear pin, and lubricated pinion gear bearings. Machine calibrated to 90 and 135 degree bend angles.',
    'audit_timeline_json': json.dumps(audit_2),
    'created_at': now - 90000000,
    'updated_at': now - 7200000,
    'published_at': now - 90000000
})

# Issue 3: Electrical Distribution Short (Resolved & Closed)
audit_3 = [
    {'timestamp': '17 Nov 2026, 11:00 AM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Incident Reported', 'note': 'Water seepage from curing runoff entered temporary distribution DB-2'},
    {'timestamp': '17 Nov 2026, 11:30 AM', 'actor': 'Admin', 'action': 'Assigned to Santosh Shinde', 'note': 'Raise DB box and install weatherproof canopy'},
    {'timestamp': '17 Nov 2026, 01:00 PM', 'actor': 'Santosh Shinde (Worker)', 'action': 'Work Completed', 'note': 'Canopy mounted 1.5m above floor slab. Rubber gasket sealed.'},
    {'timestamp': '17 Nov 2026, 03:00 PM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Supervisor Inspection Verified', 'note': 'Earth continuity and insulation resistance test verified >50 MOhms.'},
    {'timestamp': '17 Nov 2026, 05:00 PM', 'actor': 'PM Kulkarni (Admin)', 'action': 'Approved & Closed', 'note': 'Ticket closed. Safety EHS compliant.'}
]

insert_req({
    'document_id': 'iss_sky_003',
    'request_type': 'Site Issue',
    'issue_reference': 'ISS-2026-003',
    'title': 'Sub-Distribution Board DB-2 Rain & Curing Water Seepage Short Risk',
    'project': 'Skyline Commercial Complex (Tower A)',
    'site': 'Tower A (Podium & Core)',
    'category': 'Electrical Issue',
    'priority': 'High',
    'status': 'Closed',
    'incident_time': '10:30',
    'exact_location': 'Podium Level 2 Grid E-14',
    'immediate_action': 'Main RCCB tripped automatically, isolated incoming supply from generator room',
    'safety_risk': 'Electric shock hazard to wet curing workers',
    'work_impact': 'Tower crane floodlights and basement submersible dewatering pumps offline',
    'remarks': 'Water accumulated on slab top and found penetration path through deck sleeve.',
    'admin_remarks': 'Permanent weatherproof canopy installed and certified.',
    'submitted_by': 'Er. Pravin Gaikwad (Chief Supervisor)',
    'submitted_date': '17 Nov 2026',
    'assigned_supervisor': 'Er. Pravin Gaikwad',
    'assigned_worker_id': 3,
    'assigned_worker_name': 'Santosh Shinde',
    'worker_remarks': 'Fitted IP65 waterproof FRP enclosure 1.5m elevated on MS frame.',
    'resolution_description': 'Distribution board relocated to dry column face, fitted with IP65 fiberglass rain shield, and re-tested with 30mA residual current breaker.',
    'resolved_at': '17 Nov 2026, 03:00 PM',
    'closed_at': '17 Nov 2026, 05:00 PM',
    'audit_timeline_json': json.dumps(audit_3),
    'created_at': now - 172800000,
    'updated_at': now - 86400000,
    'published_at': now - 172800000
})

# Issue 4: Highway Asphalt Mix Temperature Drop (Assigned to Anil Kamble - Suresh Patil isolation)
audit_4 = [
    {'timestamp': '18 Nov 2026, 08:00 AM', 'actor': 'Er. Suresh Patil', 'action': 'Incident Reported', 'note': 'Asphalt batch truck stuck in traffic bottleneck, temperature dropped to 110C'},
    {'timestamp': '18 Nov 2026, 09:30 AM', 'actor': 'Admin', 'action': 'Assigned to Anil Kamble', 'note': 'Divert to shoulder sub-base or return batch to plant'}
]

insert_req({
    'document_id': 'iss_exp_001',
    'request_type': 'Site Issue',
    'issue_reference': 'ISS-2026-004',
    'title': 'Bituminous Concrete Mix Laydown Temperature Below Minimum Spec',
    'project': 'Eastern Expressway Link Highway',
    'site': 'Section 3 (Chainage 14+200)',
    'category': 'Material Quality Rejection',
    'priority': 'Critical',
    'status': 'Assigned',
    'incident_time': '07:45',
    'exact_location': 'Chainage 14+500 Southbound Carriage',
    'immediate_action': 'Thermocouple digital temp check recorded 112C (Min required: 135C). Paving paused.',
    'safety_risk': 'Premature pavement cracking and compaction failure if cold mix compacted',
    'work_impact': '150m asphalt surfacing cycle delayed by 2 hours',
    'remarks': 'Tarpaulin cover ripped during transit. Cold crust formed on top layer.',
    'admin_remarks': 'Reject batch for main carriage wear course. Divert to service road utility trench backfill.',
    'submitted_by': 'Er. Suresh Patil',
    'submitted_date': '18 Nov 2026',
    'assigned_supervisor': 'Er. Suresh Patil',
    'assigned_worker_id': 5,
    'assigned_worker_name': 'Anil Kamble',
    'worker_remarks': 'Awaiting diversion slip from NHAI engineer.',
    'audit_timeline_json': json.dumps(audit_4),
    'created_at': now - 86400000,
    'updated_at': now - 43200000,
    'published_at': now - 86400000
})

conn.commit()
print('Success! Realistic Site Issues seeded.')
