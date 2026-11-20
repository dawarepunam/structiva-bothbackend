import sqlite3, json, time

conn = sqlite3.connect('backend/.tmp/data.db')
c = conn.cursor()

now = int(time.time() * 1000)

# Helper function to insert with dictionary mapping
def insert_req(data):
    keys = list(data.keys())
    vals = [data[k] for k in keys]
    placeholders = ', '.join(['?'] * len(keys))
    col_str = ', '.join(keys)
    c.execute(f"INSERT OR REPLACE INTO supervisor_requests ({col_str}) VALUES ({placeholders})", vals)

# 1. Update Existing Request #1
items_1 = [
    {
        'id': 'itm_001',
        'materialCode': 'MAT-CEM-53OPC',
        'materialName': 'Ordinary Portland Cement 53 Grade',
        'specification': '53 Grade OPC High Early Strength Cement',
        'grade': 'IS 269:2015 Grade 53',
        'requestedQuantity': 200,
        'approvedQuantity': 200,
        'orderedQuantity': 200,
        'dispatchedQuantity': 200,
        'receivedQuantity': 150,
        'shortageQuantity': 0,
        'damagedQuantity': 0,
        'unit': 'Bags (50kg)',
        'preferredBrand': 'UltraTech Cement',
        'technicalRemarks': 'Grade 53 OPC certified fresh batch (<30 days aged)',
        'status': 'Partially Received'
    }
]

audit_1 = [
    {'timestamp': '18 Nov 2026, 09:30 AM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Requisition Created & Submitted', 'note': 'Urgent cement indent for Level 4 Column Pouring'},
    {'timestamp': '18 Nov 2026, 11:15 AM', 'actor': 'Admin Accounts / PM Kulkarni', 'action': 'Requisition Approved', 'note': 'Approved full 200 bags for casting schedule'},
    {'timestamp': '18 Nov 2026, 02:00 PM', 'actor': 'Central Procurement', 'action': 'Purchase Order Created (PO-2026-088)', 'note': 'Issued to Shree Mahalakshmi Cement Agencies'},
    {'timestamp': '19 Nov 2026, 07:45 AM', 'actor': 'Procurement Dispatch Desk', 'action': 'Dispatched via Truck MH-12-RN-4821', 'note': 'DC #DC-SMC-4102 for 200 Bags released'},
    {'timestamp': '19 Nov 2026, 10:30 AM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Goods Received at Site (150 Bags)', 'note': 'First batch received sound condition. Remaining 50 bags scheduled on second truck.'}
]

po_1 = {
    'poNumber': 'PO-2026-088',
    'vendor': 'Shree Mahalakshmi Cement Agencies',
    'ratePerUnit': 385,
    'totalAmount': 77000,
    'orderDate': '18 Nov 2026',
    'expectedDelivery': '19 Nov 2026'
}

dispatch_1 = {
    'dispatchRef': 'DSP-2026-041',
    'challanNo': 'DC-SMC-4102',
    'vehicleNo': 'MH-12-RN-4821',
    'driverName': 'Sanjay Shinde (+91 98221 44001)',
    'dispatchedDate': '19 Nov 2026, 07:30 AM',
    'dispatchedQuantity': 200
}

receipt_1 = {
    'receivedDate': '19 Nov 2026, 10:15 AM',
    'receivedQuantity': 150,
    'shortage': 0,
    'damaged': 0,
    'acceptedQuantity': 150,
    'receivedBy': 'Er. Pravin Gaikwad',
    'condition': 'Clean, dry bags intact, manufacturer seal verified'
}

c.execute('''
    UPDATE supervisor_requests SET
        indent_number = 'IND-2026-001',
        required_delivery_date = '19 Nov 2026',
        urgency_reason = 'Continuous structural column concreting',
        work_location = 'Tower A Level 4',
        purpose = 'Column RCC grade M35 structural concrete casting',
        status = 'Approved',
        procurement_status = 'Dispatched',
        delivery_status = 'Partially Received',
        items_json = ?,
        po_details_json = ?,
        dispatch_details_json = ?,
        receipt_details_json = ?,
        audit_timeline_json = ?
    WHERE id = 1
''', (json.dumps(items_1), json.dumps(po_1), json.dumps(dispatch_1), json.dumps(receipt_1), json.dumps(audit_1)))

# 2. Insert Request #2: TMT Steel Indent (Pending Review)
items_2 = [
    {
        'id': 'itm_002',
        'materialCode': 'MAT-TMT-550D',
        'materialName': 'TMT High-Yield Reinforcement Steel Bars',
        'specification': '16mm Diameter Thermo-Mechanically Treated Bars',
        'grade': 'IS 1786 Fe-550D',
        'requestedQuantity': 12,
        'approvedQuantity': 0,
        'orderedQuantity': 0,
        'dispatchedQuantity': 0,
        'receivedQuantity': 0,
        'unit': 'Metric Tonnes',
        'preferredBrand': 'Tata Tiscon',
        'technicalRemarks': 'Test Mill Certificate required on arrival',
        'status': 'Pending Review'
    },
    {
        'id': 'itm_003',
        'materialCode': 'MAT-WIR-BIND',
        'materialName': 'Annealed Mild Steel Binding Wire (18 Gauge)',
        'specification': 'Soft annealed black iron wire 1.2mm',
        'grade': 'IS 280 (18 SWG)',
        'requestedQuantity': 150,
        'approvedQuantity': 0,
        'orderedQuantity': 0,
        'dispatchedQuantity': 0,
        'receivedQuantity': 0,
        'unit': 'Kilograms',
        'preferredBrand': 'Tata Wiron',
        'technicalRemarks': 'Bundle pack 25kg each',
        'status': 'Pending Review'
    }
]

audit_2 = [
    {'timestamp': '19 Nov 2026, 08:30 AM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Requisition Created & Submitted', 'note': 'Level 5 beam reinforcement steel requirements'}
]

insert_req({
    'document_id': 'req_mat_002',
    'request_type': 'Material Request',
    'title': 'Material Indent: TMT Steel Fe-550D (12 MT) + Binding Wire',
    'project': 'Skyline Commercial Complex (Tower A)',
    'site': 'Tower A (Podium & Core)',
    'category': 'Steel & Rebar',
    'priority': 'Critical',
    'status': 'Submitted',
    'details': json.dumps({'summary': '12 MT TMT Steel + 150 KG Binding wire'}),
    'remarks': 'Rebar fabrication begins Friday morning.',
    'submitted_by': 'Er. Pravin Gaikwad (Chief Supervisor)',
    'submitted_date': '19 Nov 2026',
    'indent_number': 'IND-2026-002',
    'required_delivery_date': '21 Nov 2026',
    'urgency_reason': 'Rebar bending yard setup requires raw steel immediately to avoid slab schedule delay',
    'work_location': 'Tower A Level 5 Core and Transfer Girders',
    'purpose': 'Structural reinforcement steel for primary beams',
    'procurement_status': 'Not Started',
    'delivery_status': 'Not Delivered',
    'items_json': json.dumps(items_2),
    'audit_timeline_json': json.dumps(audit_2),
    'created_at': now,
    'updated_at': now,
    'published_at': now
})

# 3. Insert Request #3: Shuttering Plywood (Revision Required)
items_3 = [
    {
        'id': 'itm_004',
        'materialCode': 'MAT-PLY-12MM',
        'materialName': 'Film-Faced Shuttering Plywood 12mm (34kg)',
        'specification': 'Phenolic resin coated phenolic bonded shuttering board',
        'grade': 'IS 4990 Class I',
        'requestedQuantity': 100,
        'approvedQuantity': 0,
        'orderedQuantity': 0,
        'dispatchedQuantity': 0,
        'receivedQuantity': 0,
        'unit': 'Sheets',
        'preferredBrand': 'Century Ply',
        'technicalRemarks': 'Waterproof film faced for smooth ceiling finish',
        'status': 'Revision Required'
    }
]

audit_3 = [
    {'timestamp': '18 Nov 2026, 03:00 PM', 'actor': 'Er. Pravin Gaikwad', 'action': 'Requisition Submitted', 'note': 'Formwork plywood indent'},
    {'timestamp': '18 Nov 2026, 06:15 PM', 'actor': 'PM Kulkarni (Admin)', 'action': 'Revision Requested', 'note': 'Current on-site inventory shows 45 reusable sheets from Podium pour. Please deduct existing stock and re-submit for 55 sheets.'}
]

insert_req({
    'document_id': 'req_mat_003',
    'request_type': 'Material Request',
    'title': 'Material Indent: Film-Faced Shuttering Plywood 12mm',
    'project': 'Skyline Commercial Complex (Tower A)',
    'site': 'Tower A (Podium & Core)',
    'category': 'Formwork & Timber',
    'priority': 'High',
    'status': 'Revision Required',
    'details': json.dumps({'summary': '100 Sheets 12mm Shuttering Plywood'}),
    'remarks': 'Urgent replacement of worn decking sheets',
    'admin_remarks': 'Deduct 45 reusable sheets from Podium 2 before re-ordering. Max approval limit 55 sheets.',
    'submitted_by': 'Er. Pravin Gaikwad (Chief Supervisor)',
    'submitted_date': '18 Nov 2026',
    'indent_number': 'IND-2026-003',
    'required_delivery_date': '20 Nov 2026',
    'urgency_reason': 'Decking assembly starts 22 Nov',
    'work_location': 'Tower A Floor 4 Decking Area',
    'purpose': 'Slab shuttering deck forms for structural concrete',
    'procurement_status': 'Not Started',
    'delivery_status': 'Not Delivered',
    'items_json': json.dumps(items_3),
    'revision_remarks': 'Deduct 45 reusable sheets from Podium 2 before re-ordering. Max approval limit 55 sheets.',
    'audit_timeline_json': json.dumps(audit_3),
    'created_at': now,
    'updated_at': now,
    'published_at': now
})

# 4. Insert Request #4: Highway Project Indent for Isolation Testing (Er. Suresh Patil)
items_4 = [
    {
        'id': 'itm_005',
        'materialCode': 'MAT-AGG-20MM',
        'materialName': 'Crushed Basalt Coarse Aggregate (20mm)',
        'specification': 'Graded angular blue metal basalt aggregate',
        'grade': 'IS 383:2016 Zone II',
        'requestedQuantity': 50,
        'approvedQuantity': 50,
        'orderedQuantity': 50,
        'dispatchedQuantity': 50,
        'receivedQuantity': 50,
        'unit': 'Brass',
        'preferredBrand': 'Deccan Quarry',
        'technicalRemarks': 'Dense bitumen macadam aggregate mix',
        'status': 'Fully Received'
    }
]

audit_4 = [
    {'timestamp': '17 Nov 2026, 10:00 AM', 'actor': 'Er. Suresh Patil', 'action': 'Requisition Created', 'note': 'Highway paving aggregate batch'},
    {'timestamp': '17 Nov 2026, 01:00 PM', 'actor': 'Admin', 'action': 'Approved & Dispatched', 'note': 'Full delivery released from local quarry'},
    {'timestamp': '18 Nov 2026, 09:00 AM', 'actor': 'Er. Suresh Patil', 'action': 'Delivery Fully Received', 'note': '50 Brass delivered and tipped at batching plant'}
]

insert_req({
    'document_id': 'req_mat_004',
    'request_type': 'Material Request',
    'title': 'Material Indent: Basalt Aggregate 20mm (50 Brass)',
    'project': 'Eastern Expressway Link Highway',
    'site': 'Section 3 (Chainage 14+200)',
    'category': 'Aggregates & Sand',
    'priority': 'Standard',
    'status': 'Approved',
    'details': json.dumps({'summary': '50 Brass 20mm Aggregate'}),
    'remarks': 'Pavement base course DBM mix',
    'admin_remarks': 'Approved for highway section 3',
    'submitted_by': 'Er. Suresh Patil',
    'submitted_date': '17 Nov 2026',
    'indent_number': 'IND-2026-004',
    'required_delivery_date': '18 Nov 2026',
    'urgency_reason': 'Paving machine mobilized',
    'work_location': 'Chainage 14+200 to 14+900',
    'purpose': 'Dense bitumen macadam course production',
    'procurement_status': 'Completed',
    'delivery_status': 'Fully Received',
    'items_json': json.dumps(items_4),
    'audit_timeline_json': json.dumps(audit_4),
    'created_at': now,
    'updated_at': now,
    'published_at': now
})

conn.commit()
print('Success! All 4 Material Requests populated.')
